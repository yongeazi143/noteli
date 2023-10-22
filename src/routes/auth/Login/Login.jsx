import "./Login.css";
import Logo from "../../../UI/Logo/Logo";
import { useEffect, useCallback, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { en } from "@teamhanko/hanko-elements/i18n/en";
import swal from "sweetalert";
import { useGlobalContext } from "../../../../context";
const apiUrl = process.env.HANKO_API_URL;
// console.log(en);
en.labels.continue = "Login to your Account";
en.labels.email = "Enter Email Address";

const Login = () => {
  const navigate = useNavigate();
  const { currentUrl } = useGlobalContext();
  const hanko = useMemo(() => new Hanko(apiUrl), []);

  const redirectAfterLogin = useCallback(() => {
    navigate(currentUrl);
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
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
          <p className=" font-medium text-xl">Back To Home</p>
          <i className="bx bx-exit bx-rotate-180 bx-md b"></i>
        </Link>
      </div>
      <div className="bg-footer w-[90%] h-[80vh] p-5 rounded-2xl flex items-center justify-center max-w-4xl">
        <hanko-auth class="hankoComponent" />
      </div>
    </section>
  );
};

export default Login;
