import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Content from "./hoc/Contents/Contents";
import Login from "./routes/auth/Login/Login";
import Signup from "./routes/auth/Signup/Signup";
import UserProfile from "./routes/auth/Profile/Profile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/users-@james" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
