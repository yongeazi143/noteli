import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@teamhanko/hanko-elements";
const hankoApi = process.env.HANKO_API_URL;

const Settings = () => {
  const navigate = useNavigate();
  useEffect(() => {
    register(hankoApi).catch((error) => {});
  }, []);

  return <hanko-profile />;
};
export default Settings;
