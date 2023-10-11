import { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.HANKO_API_URL;

const Login = () => {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <hanko-auth />
    </div>
  );
};

export default Login;
