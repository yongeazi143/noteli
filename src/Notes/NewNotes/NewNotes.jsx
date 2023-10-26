import { Editor } from "novel";
import Colors from "../../UI/Colors/Colors";

const NewNotes = () => {
  return (
    <section className="">
      <div className="w-full border flex items-center justify-between p-4">
        <h1 className="font-medium text-nav-blue text-2xl font-poppins">
          Write Note
        </h1>
        <button className="bg-orange text-center text-xl font-poppins font-medium text-white  px-7 py-3 rounded cursor-pointer ">
          Share
        </button>
      </div>
      <Editor defaultValue="" />
      <div className="w-full flex flex-col items-center justify-between mb-5 gap-5">
        <Colors />
        <button className="bg-blue text-center text-xl font-poppins font-medium text-white  px-7 py-3 rounded cursor-pointer self-end mr-5">
          Save
        </button>
      </div>
    </section>
  );
};

export default NewNotes;
