import { useState, useEffect } from "react";
import { Toaster, ToastBar } from "react-hot-toast";

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

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            top: "80px",
            position: "relative",
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
      {loading ? <PageLoader /> : <PageRoutes />}
    </>
  );
};

export default App;
