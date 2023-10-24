import MyNotes from "../../../Notes/MyNotes/MyNotes";
import images from "../../../constants/images";
import DateInfo from "../../../containers/DateInfo/DateInfo";
import TimeOfDay from "../../../containers/TimeOfDay/TimeofDay";

const Home = () => {
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
        <div className="shadow mx-auto shadow-gray bg-hero rounded-md   p-5 w-[90vw] ">
          <div className=" mb-5 flex items-center justify-between">
            <h1 className="font-bold font-serif text-lg w-max uppercase text-center cursor-pointer text-nav-blue">
              Scratch Pad
            </h1>

            <div className="cursor-pointer">
              <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
            </div>
          </div>
          <textarea
            name="scratch-pad"
            className="w-full border-none outline-none bg-hero text-base cursor-auto overflow-y-auto pr-4 align-top resize-none text-nav-blue tracking-wide font-serif"
            id=""
            cols="30"
            rows="10"
            placeholder="Write something..."
          ></textarea>
        </div>
        <div className="flex flex-col bg-white shadow-sm rounded-md  w-[90vw] mx-auto my-10">
          <div className=" mb-5 flex items-center justify-between">
            <h1 className="font-bold font-serif text-lg w-max uppercase text-center cursor-pointer text-nav-blue">
              Your Notes
            </h1>

            <div className="cursor-pointer">
              <i className="bx bx-dots-vertical-rounded bx-sm"></i>
            </div>
          </div>
          <ul className="flex flex-col items-center justify-center gap-1 py-2">
            <li className="font-poppins text-lg font-bold text-nav-blue hover:border-b-4 hover:text-black leading-relaxed pb-2">
              All Notes
            </li>
            <li className="font-poppins text-lg font-bold text-nav-blue hover:border-b-4 hover:text-black leading-relaxed pb-2">
              Public
            </li>
            <li className="font-poppins text-lg font-bold text-nav-blue hover:border-b-4 hover:text-black leading-relaxed pb-2">
              Encryped
            </li>
            <li className="font-poppins text-lg font-bold text-nav-blue hover:border-b-4 hover:text-black leading-relaxed pb-2">
              Shared
            </li>
            <li className="font-poppins text-lg font-bold text-nav-blue hover:border-b-4 hover:text-black leading-relaxed pb-2">
              Favourites
            </li>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-1 py-2 w-full">
            <MyNotes />
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;
