import { useState } from "react";
import List from "../Content/List/List";
import Paragraph from "../Content/Paragraph/Paragraph";

const MyNotes = ({ id, tittle, content, color, createdAt }) => {
  const [noteAction, setNoteAction] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const hoverStyles = {
    backgroundColor: isHovered && color,
    borderBottomColor: color,
  };

  return (
    <li
      className={`flex shadow rounded-md flex-col w-full items-center justify-center mb-5 px-2 py-5 border-b-2  transition-colors duration-700 hover:bg-${color} hover:text-white group`}
      style={hoverStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between w-full relative">
        <span className="text-lg font-unica text-nav-blue font-bold group-hover:text-white">
          {createdAt}
        </span>
        <span>
          <i
            className={`bx bx-dots-vertical-rounded bx-sm bx-border group-hover:border-white cursor-pointer`}
            onClick={() => setNoteAction(!noteAction)}
            style={{ borderColor: isHovered ? "#fff" : color }}
          ></i>
        </span>
      </div>
      <div className="w-full my-5">
        <h1 className="font-poppins font-medium text-2xl text-nav-blue mb-3 group-hover:text-white">
          {tittle}
        </h1>
        {Array.isArray(content) ? (
          <List content={content} />
        ) : (
          <Paragraph content={content} />
        )}
      </div>
    </li>
  );
};

export default MyNotes;
