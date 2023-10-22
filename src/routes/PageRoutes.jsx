import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Content from "../hoc/Contents/Contents";
import Login from "./auth/Login/Login";
import UserDashboard from "./auth/UserDashboard/UserDashboard";
import { useGlobalContext } from "../../context";

// Imports

const Home = lazy(() => import("./pages/Home/Home"));
const Notes = lazy(() => import("./pages/Notes/Notes"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Favourites = lazy(() => import("./pages/Favourites/Favourites"));
const SharedWithMe = lazy(() => import("./pages/Shared/Shared"));
const Profile = lazy(() => import("./pages/ProfileDetails/ProfileDetails"));
const Settings = lazy(() => import("./pages/Settings/Settings"));

const PageRoutes = () => {
  const { activeItem } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const renderSubRoute = () => {
    switch (activeItem) {
      case "Home":
        return <Home />;
      case "Notes":
        return <Notes />;
      case "Explore":
        return <Explore />;
      case "Favourites":
        return <Favourites />;
      case "Shared With Me":
        return <SharedWithMe />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [activeItem]);
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/login" exact element={<Login />} />
      {/* <Route path="/create-account" element={<Signup />} /> */}
      <Route path="/user/dashboard" element={<UserDashboard />}>
        <Route
          path={`/user/dashboard/:${activeItem.toLowerCase()}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {renderSubRoute()}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
export default PageRoutes;
