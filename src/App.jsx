import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster, ToastBar } from "react-hot-toast";
import "./App.css";
import PageLoader from "./UI/PageLoader/PageLoader";
import ThemeButton from "./UI/ThemeButton/ThemeButton";

// const PageLoader = lazy(() => import("./UI/PageLoader/PageLoader"));
const PageRoutes = lazy(() => import("./routes/PageRoutes"));

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

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
      <Suspense fallback={<PageLoader />}>{<PageRoutes />}</Suspense>
    </>
  );
};

export default App;
