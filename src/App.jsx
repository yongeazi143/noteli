import { useState, useEffect } from "react";
import "./App.css";
import PageLoader from "./UI/PageLoader/PageLoader";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <>{loading ? <PageLoader /> : <PageRoutes />}</>;
};

export default App;
