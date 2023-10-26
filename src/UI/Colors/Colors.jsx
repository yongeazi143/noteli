import { useGlobalContext } from "../../../context";
import NoteColor from "../NoteColor/NoteColor";
const Colors = () => {
  const { activeColor, setActiveColor } = useGlobalContext();

  const handeleColorClick = (value) => {
    setActiveColor(value);
  };

  return (
    <ul className="w-full py-1 flex items-center justify-evenly">
      <NoteColor
        selected={activeColor === "#F48C06"}
        onClick={() => handeleColorClick("#F48C06")}
        bgColor="bg-orange"
      />
      <NoteColor
        selected={activeColor === "#20c997"}
        onClick={() => handeleColorClick("#20c997")}
        bgColor="bg-teal"
      />
      <NoteColor
        selected={activeColor === "#6610f2"}
        onClick={() => handeleColorClick("#6610f2")}
        bgColor="bg-indigo"
      />
      <NoteColor
        selected={activeColor === "#8ac3a3"}
        onClick={() => handeleColorClick("#8ac3a3")}
        bgColor="bg-green"
      />
      <NoteColor
        selected={activeColor === "#f674ad"}
        onClick={() => handeleColorClick("#f674ad")}
        bgColor="bg-red"
      />
      <NoteColor
        selected={activeColor === "#158df7"}
        onClick={() => handeleColorClick("#158df7")}
        bgColor="bg-sky"
      />
    </ul>
  );
};

export default Colors;
