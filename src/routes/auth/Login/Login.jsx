import "./Login.css";
import Logo from "../../../UI/Logo/Logo";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import _Hanko, { HankoApiUrl as apiUrl } from "../../../../hanko/hanko";
import { supabase } from "../../../../supabase/supabase";
import { useGlobalContext } from "../../../../context";
const { hankoInstance, en, register } = _Hanko;

en.labels.continue = "Login to your Account";
en.labels.email = "Enter Email Address";

const Login = () => {
  const navigate = useNavigate();
  const { currentUrl } = useGlobalContext();
  const hanko = useMemo(() => hankoInstance(), []);
  const sessionStatus = () => _Hanko.hankoInstance().session.isValid();
  const redirectAfterLogin = useCallback(() => {
    navigate(currentUrl);
  }, [navigate]);

  const checkIfUserExistInDatabase = async (userId) => {
    let { data: existingUsers, error } = await supabase
      .from("hanko_authentication_users")
      .select("*")
      .eq("user_id", `${userId}`);

    if (existingUsers && existingUsers.length > 0) {
      return true;
    }
    if (error) console.log(error);
    return false;
  };

  const handleSaveToDatabase = async () => {
    const user = await hanko.user.getCurrent();
    try {
      const userExists = await checkIfUserExistInDatabase(user.id);
      if (!userExists) {
        const { data, error } = await supabase
          .from("hanko_authentication_users")
          .insert([
            {
              user_id: user.id,
              user_email: user.email,
              is_login: sessionStatus(),
            },
          ])
          .select();
        console.log(data, error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserAuthStateOnLogIn = async () => {
    const user = await hanko.user.getCurrent();
    try {
      const userExists = await checkIfUserExistInDatabase(user.id);

      if (userExists) {
        const { data, error } = await supabase
          .from("hanko_authentication_users")
          .update({ is_login: sessionStatus() })
          .eq("user_id", "46691ff0-6e20-405e-96cf-a48e14cac3a5")
          .select();
        console.log("[Updated!!!]", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        handleSaveToDatabase();
        updateUserAuthStateOnLogIn();
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(apiUrl, { translations: { en } }).catch((error) => {});
  }, []);
  return (
    <section className="Login bg-hero w-full flex flex-col items-center justify-center gap-10 h-screen">
      <div className="w-full p-3 flex items-center justify-between">
        <Logo />
        <Link
          to="/"
          className="flex items-center cursor-pointer justify-center gap-1 flex-row-reverse text-nav-blue hover:text-black md:mr-16"
        >
          <p className=" font-medium text-sm">Back To Home</p>
          <i className="bx bx-exit bx-rotate-180"></i>
        </Link>
      </div>
      <div className="bg-footer w-[90%] h-[80vh] p-5 rounded-2xl flex items-center justify-center max-w-4xl">
        <hanko-auth class="hankoComponent" />
      </div>
    </section>
  );
};

export default Login;
