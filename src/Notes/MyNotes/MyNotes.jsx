import { useState } from "react";
const MyNotes = ({ tittle, content, color }) => {
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
      {/* Fist Flex List Item */}
      <div className="flex items-center justify-between w-full relative">
        <span
          className="text-lg font-unica text-nav-blue font-bold
                group-hover:text-white"
        >
          {new Date().toLocaleDateString()}
        </span>
        <span>
          <i
            className={`bx bx-dots-vertical-rounded bx-sm bx-border group-hover:border-white cursor-pointer`}
            onClick={() => setNoteAction(!noteAction)}
            style={{ borderColor: isHovered ? "#fff" : color }}
          ></i>
          <ul
            className={`${
              noteAction ? "flex" : "hidden"
            } absolute w-32 h-32 p4  shadow-sm shadow-gray rounded-md bg-white right-12 top-0 flex-col items-center justify-evenly gap-2 text-black`}
          >
            <li
              className="w-full flex items-center justify-center gap-3 
            cursor-pointer py-1  hover:bg-[#F7F8F9]"
            >
              <i className="bx bx-book-open"></i>
              <span>View</span>
            </li>
            <li
              className="w-full flex items-center justify-center gap-3 
            cursor-pointer py-1  hover:bg-[#F7F8F9]"
            >
              <i className="bx bx-edit-alt"></i>
              <span>Edit</span>
            </li>
            <li
              className="w-full flex items-center justify-center gap-3 
            cursor-pointer py-1  hover:bg-[#F7F8F9]"
            >
              <i className="bx bx-trash"></i>
              <span>Delete</span>
            </li>
          </ul>
        </span>
      </div>
      {/* 2nd Flex List Item */}
      {/* 
      tittle
      content
      color
      */}
      <div className="w-full my-5">
        <h1 className="font-poppins font-medium text-2xl text-nav-blue mb-3 group-hover:text-white">
          {tittle}
        </h1>
        <p className="text-base font-serif text-gray font-medium pr-4 group-hover:text-white">
          {/* Virtual Digital Marketing Course every week on Monday, Wednesday and
          Saturday.Virtual Digital... */}
          {content}
        </p>
      </div>
      <div></div>
    </li>
  );
};
export default MyNotes;
