import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _Hanko from "../../../../hanko/hanko";
const { register } = _Hanko;

const Settings = () => {
  const navigate = useNavigate();
  useEffect(() => {
    register(hankoApi).catch((error) => {});
  }, []);

  return <hanko-profile />;
};
export default Settings;
