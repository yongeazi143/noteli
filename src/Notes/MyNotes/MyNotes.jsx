const MyNotes = () => {
  return (
    <li
      className="flex shadow rounded-md flex-col w-full items-center justify-center px-2 py-5 border-b-2 border-b-orange transition-colors duration-700
            hover:bg-orange hover:text-white group"
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
          <i className="bx bx-dots-vertical-rounded bx-sm bx-border"></i>
          <ul className="hidden absolute w-32 h-28 p4  shadow-sm shadow-gray-dark rounded bg-white right-12 top-0 flex-col items-center justify-evenly gap-2">
            <li className="w-full flex items-center justify-around">
              <i className="bx bx-book-open bx-sm"></i>
              <span>View</span>
            </li>
            <li className="w-full flex items-center justify-around">
              <i className="bx bx-edit-alt bx-sm"></i>
              <span>Edit</span>
            </li>
            <li className="w-full flex items-center justify-around">
              <i className="bx bx-trash bx-sm"></i>
              <span>Delete</span>
            </li>
          </ul>
        </span>
      </div>
      {/* 2nd Flex List Item */}
      <div className="w-full my-5">
        <h1 className="font-poppins font-medium text-2xl text-nav-blue mb-3 group-hover:text-white">
          Weekly Planner
        </h1>
        <p className="text-base font-serif text-gray font-medium pr-4 group-hover:text-white">
          Virtual Digital Marketing Course every week on Monday, Wednesday and
          Saturday.Virtual Digital...
        </p>
      </div>
      <div></div>
    </li>
  );
};
export default MyNotes;
