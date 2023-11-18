import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserEmail from "../../../containers/UserEmail/UserEmail";
import swal from "sweetalert";
import { supabase } from "../../../../supabase/supabase";
import toast from "react-hot-toast";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const LogoutUser = ({ expanded }) => {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState(null);
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) => {
      //? Check if Hanko is available before setting it
      if (Hanko) {
        setHanko(new Hanko(hankoApi ?? ""));
      }
    });
  }, []);

  const onFirstLetterChange = (letter) => {
    setFirstLetter(letter);
  };

  const updateUserAuthStateOnLogout = async () => {
    try {
      const { data, error } = await supabase
        .from("hanko_authentication_users")
        .update({ is_login: false })
        .eq("user_id", "46691ff0-6e20-405e-96cf-a48e14cac3a5")
        .select();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      //todo Logout user /hanko auth/
      await hanko?.user.logout();
      //todo Logout user /supabase auth/
      updateUserAuthStateOnLogout();
      navigate("/login");
    } catch (error) {
      toast.error("Error during logout:", error);
    }
  };

  const beforeLogout = () => {
    swal({
      title: "Confirm Logout",
      text: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        swal("Logging you out...", {
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
