const SingleFeature = ({ title, content, color, icon }) => (
  <div
    className="group mb-2 relative p-4 pt-10 bg-white text-gray 
  md:w-80 w-[80%] h-max min-h-[20rem] rounded-md mx-auto text-center hover:bg-footer transition ease-linear duration-500"
    style={{
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    }}
  >
    <h1 className="text-xl font-bold leading-normal text-blue my-5 md:text-2xl font-poppins tracking-wide group-hover:text-gray-100">
      {title}
    </h1>
    <p
      className="text-gray-100 font-serif font-normal px-5 md:px-0
          text-lg mb-6 max-w-lg group-hover:text-gray-100"
    >
      {content}
    </p>
    <div className="absolute left-0 right-0 -top-8">
      <i
        className={`bx ${icon} bx-md bx-border-circle text-white p-4`}
        style={{ backgroundColor: color }}
      ></i>
    </div>
  </div>
);

export default SingleFeature;
