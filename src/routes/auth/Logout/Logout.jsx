// LogoutUser.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import UserEmail from "../../../containers/UserEmail/UserEmail";
import swal from "sweetalert";

const hankoApi = process.env.HANKO_API_URL;

const LogoutUser = ({ expanded }) => {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState();
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const onFirstLetterChange = (letter) => {
    setFirstLetter(letter);
  };

  const logout = async () => {
    try {
      // Logout user
      await hanko?.user.logout();

      // Remove user ID from localStorage
      localStorage.removeItem("userId");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const beforeLogout = () => {
    swal({
      title: "Are you sure?",
      // text: "Make sure you save all notes,",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        console.log(willLogout);
        swal("😊! Logging you out", {
          icon: "success",
        }).then(() => {
          logout();
        });
      }
    });
  };

  return (
    <div
      className="border-t flex gap-1 p-3 absolute bottom-0 w-full group font-poppins border-gray-dark cursor-pointer"
      onClick={beforeLogout}
    >
      <h1 className="py-2 px-4 bg-footer text-white text-xl rounded-md uppercase font-bold text-center">
        {firstLetter}
      </h1>
      <div
        className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-full ml-3" : "w-0"}
          `}
      >
        <div className="leading-4 font-semibold w-full ">
          <h5 className="flex items-center justify-between ">
            Logout
            <i className="bx bx-chevron-right bx-sm"></i>
          </h5>
          <UserEmail onFirstLetterChange={onFirstLetterChange} />
        </div>
      </div>
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-2 mt-2
          bg-dark-blue text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          Logout
        </div>
      )}
    </div>
  );
};

export default LogoutUser;
