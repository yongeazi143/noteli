import { useState } from "react";
import MyNotes from "../../../Notes/MyNotes/MyNotes";
import images from "../../../constants/images";
import DateInfo from "../../../containers/DateInfo/DateInfo";
import TimeOfDay from "../../../containers/TimeOfDay/TimeofDay";
import templates from "../../../constants/templates";
import ScratchPad from "../../../Notes/ScratchPad/ScratchPad";

const Home = () => {
  const [noteType, setNoteType] = useState(false);
  return (
    <section>
      <div
        className="flex items-start justify-between p-2 text-white"
        style={{
          backgroundImage: `url(${images.HomeImg1})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "contain",
          height: "250px",
        }}
      >
        <TimeOfDay />
        <DateInfo />
      </div>
      <div
        className="absolute
      left-1/2 -translate-x-1/2 top-40 w-full"
      >
        <ScratchPad />
        <div className="flex flex-col bg-white shadow-sm rounded-md  w-[90vw] mx-auto my-10 p-1 relative">
          <div className=" mb-5 flex items-center justify-between">
            <h1 className="font-bold font-serif text-lg w-max uppercase text-center cursor-pointer text-nav-blue">
              Your Notes
            </h1>

            <div className="cursor-pointer">
              <i
                className="bx bx-dots-horizontal-rounded bx-sm"
                onClick={() => setNoteType(!noteType)}
              ></i>
            </div>
          </div>
          <ul
            className={`${
              noteType ? "flex" : "hidden"
            } flex-col  py-2 absolute w-32 h-48  shadow-sm shadow-gray rounded-md bg-white right-10  -top-40 items-center justify-evenly gap-2 text-black z-10`}
          >
            <li className="font-poppins text-sm font-medium text-nav-blue hover:border-b-2 hover:text-black cursor-pointer pb-2">
              All Notes
            </li>
            <li className="font-poppins text-sm font-medium text-nav-blue hover:border-b-2 hover:text-black cursor-pointer pb-2">
              Public
            </li>
            <li className="font-poppins text-sm font-medium text-nav-blue hover:border-b-2 hover:text-black cursor-pointer pb-2">
              Encryped
            </li>
            <li className="font-poppins text-sm font-medium text-nav-blue hover:border-b-2 hover:text-black cursor-pointer pb-2">
              Shared
            </li>
            <li className="font-poppins text-sm font-medium text-nav-blue hover:border-b-2 hover:text-black cursor-pointer pb-2">
              Favourites
            </li>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-1 py-2 w-full">
            {templates.map((note, index) => (
              <MyNotes
                key={index}
                tittle={note.title}
                content={note.content}
                color={note.color}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;
