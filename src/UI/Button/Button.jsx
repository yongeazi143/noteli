import { useState } from "react";
import swal from "sweetalert";
import { useGlobalContext } from "../../../context";

const Button = () => {
  const { getNoteDataFromLocalStorage, noteJsonData, setNoteJsonData } =
    useGlobalContext();

  const onSave = () => {
    console.log(noteJsonData);
  };

  return (
    <button
      className="bg-blue text-center text-sm font-poppins font-medium text-white  px-7 py-3 rounded cursor-pointer self-end mr-5 hover:opacity-90"
      onClick={onSave}
    >
      save
    </button>
  );
};

export default Button;
