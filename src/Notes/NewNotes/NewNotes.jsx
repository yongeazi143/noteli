import { useEffect, useState } from "react";
import { Editor } from "novel";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import Colors from "../../UI/Colors/Colors";
import { useGlobalContext } from "../../../context";
import Button from "../../UI/Button/Button";

const NewNotes = () => {
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [isEmpty, setIsEmpty] = useState(localStorage.getItem("editor_state"));
  const [isFlag, setIsFlag] = useState(isEmpty === "true");
  const { dispatch, userId, noteJsonData, setNoteJsonData, activeColor } =
    useGlobalContext();

  useEffect(() => {
    setIsFlag(isEmpty);
  }, [isEmpty]);

  const showSaveHandler = () => {
    setSaveStatus("Saving...");
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  };

  const updateNoteData = (editor) => {
    const json = editor.getJSON();
    setNoteJsonData(json);
  };

  const onSave = () => {
    if (isFlag === true) {
      toast.error("Sorry! you have not writing a note to save", {
        id: "error",
        position: "top-right",
        style: {
          backgroundColor: "#363636",
          color: "#fff",
        },
      });
    } else {
      swal("Good Job!", "Note Saved", "success");
      dispatch({
        type: "ADD_NOTE",
        id: uuid(),
        color: activeColor,
        note: noteJsonData,
        date: new Date().toLocaleDateString(),
      });
    }
  };
  return (
    <section className="relative">
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="font-medium text-nav-blue text-2xl font-poppins">
          Write Note
        </h1>
        <Button bgColor={"bg-orange"} value={"Share"} />
      </div>
      <div className="relative w-full max-w-screen-lg">
        <div className="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-hero px-2 py-1 text-sm text-black ">
          {saveStatus}
        </div>
        <Editor
          defaultValue=""
          onUpdate={() => {
            setSaveStatus("Writing...");
          }}
          onDebouncedUpdate={(editor) => {
            showSaveHandler();
            updateNoteData(editor);
            localStorage.setItem("editor_state", editor.isEmpty);
            setIsEmpty(editor.isEmpty);
          }}
          storageKey={`note__${userId()}`}
          debounceDuration={1000}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-between mb-5 gap-5">
        <Colors />
        <Button onClick={onSave} value={"Save"} bgColor={"bg-blue"} />
      </div>
    </section>
  );
};

export default NewNotes;
