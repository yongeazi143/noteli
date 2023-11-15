import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Content from "../hoc/Contents/Contents";
import Login from "./auth/Login/Login";
import UserDashboard from "./auth/UserDashboard/UserDashboard";
import PenAnimation from "../hoc/Animation/PenAnimation/PenAnimation";
import { useGlobalContext } from "../../context";
import CompleteSignupVerification from "./auth/CompleteRegistration/CompleteRegistration";
import ThemeButton from "../UI/ThemeButton/ThemeButton";
// Imports

const Home = lazy(() => import("./pages/Home/Home"));
const Notes = lazy(() => import("./pages/Notes/Notes"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Favourites = lazy(() => import("./pages/Favourites/Favourites"));
const SharedWithMe = lazy(() => import("./pages/Shared/Shared"));
const Profile = lazy(() => import("./pages/ProfileDetails/ProfileDetails"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const NewNotes = lazy(() => import("../Notes/NewNotes/NewNotes"));

const PageRoutes = () => {
  const { activeItem } = useGlobalContext();

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
      case "New-notes":
        return <NewNotes />;
      default:
        return null;
    }
  };

  return (
    <>
      <ThemeButton />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/complete-signup-verification"
          exact
          element={<CompleteSignupVerification />}
        />
        <Route path="/user/dashboard" element={<UserDashboard />}>
          <Route
            path={`/user/dashboard/:${activeItem.toLowerCase()}`}
            element={
              <Suspense fallback={<PenAnimation />}>
                {renderSubRoute()}
              </Suspense>
            }
          />
          <Route
            path={"/user/dashboard/:new-note"}
            element={
              <Suspense fallback={<PenAnimation />}>{<NewNotes />}</Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
