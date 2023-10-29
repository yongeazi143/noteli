// UserEmail.jsx
import React, { useEffect, useState } from "react";
import { Hanko } from "@teamhanko/hanko-elements";
import toast from "react-hot-toast";

const apiUrl = process.env.HANKO_API_URL;

const UserEmail = ({ onFirstLetterChange }) => {
  const [userEmail, setUserEmail] = useState("");
  const hanko = new Hanko(apiUrl);
  const sessionStatus = hanko.session.isValid();
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const { email } = await hanko.user.getCurrent();

        // Set user email in the state
        setUserEmail(email);

        // Notify parent component about the first letter
        if (onFirstLetterChange && typeof onFirstLetterChange === "function") {
          const firstLetter = email.charAt(0).toUpperCase();
          onFirstLetterChange(firstLetter);
        }
      } catch (error) {
        setTimeout(() => {
          toast.error(
            "Sorry there was an error fetching your Email. login again"
          );
        }, 2000);
      }
    };
    if (sessionStatus) {
      fetchUserEmail();
    }
  }, []);

  return <span className="text-xs text-gray">{userEmail}</span>;
};

export default UserEmail;
