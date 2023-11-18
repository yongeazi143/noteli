// import "./Login.css";
import Logo from "../../../UI/Logo/Logo";
import { useEffect, useCallback, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import _Hanko, { HankoApiUrl as apiUrl } from "../../../../hanko/hanko";
import { supabase } from "../../../../supabase/supabase";
import { useGlobalContext } from "../../../../context";
import Fingerprint from "../../../hoc/Animation/FingerPrint/FingerPrint";

const { hankoInstance, en, register } = _Hanko;

en.headlines.loginEmail = "Log in or Sign up";
en.labels.continue = "Login to your Account";
en.labels.email = "Enter Email Address";
en.labels.signInPasskey = "Continue with Fingerprint";
en.headlines.registerAuthenticator = "Save your passkey";

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
    if (error) return false;
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
    <section className="w-full flex flex-col items-center justify-start gap-10 h-screen">
      <div className="w-full pt-5 pl-3">
        <Logo />
      </div>
      <div className="px-5 flex-1">
        <hanko-auth class="hankoComponent" />
      </div>
      <Fingerprint />
    </section>
  );
};

export default Login;
