import images from "../../../constants/images";
import DateInfo from "../../../containers/DateInfo/DateInfo";
import TimeOfDay from "../../../containers/TimeOfDay/TimeofDay";

const Home = () => {
  return (
    <section className="relative w-full  ">
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
      {/* <img src={images.HomeImg1} alt="Home Background" /> */}
      <div
        className="shadow shadow-gray bg-white rounded-md absolute
      left-1/2 -translate-x-1/2  p-5 w-[90vw] top-28"
      >
        <div className=" mb-5 flex items-center justify-between">
          <h1 className="font-bold font-serif text-lg w-max uppercase text-center cursor-pointer text-nav-blue">
            New Notes
          </h1>

          <div className="cursor-pointer">
            <i className="bx bx-dots-vertical-rounded bx-sm"></i>
          </div>
        </div>
        <div className="flex flex-col-reverse  gap-4 items-start justify-evenly">
          <div className="rounded-md shadow shadow-gray w-full h-52 bg-white flex items-center justify-center cursor-pointer hover:bg-opacity-90">
            <div className="flex flex-col items-center justify-center gap-3 ">
              <i className="bx bx-plus-circle bx-md"></i>
              <h1 className="text-2xl font-medium  font-serif">
                Create Public Note
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
