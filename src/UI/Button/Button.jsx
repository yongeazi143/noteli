const Button = ({ value, bgColor, onClick }) => {
  return (
    <button
      className={`${bgColor} text-center text-sm font-poppins font-semibold text-white inline-block  transition duration-200 ease-in-out  px-4 py-3 rounded-md cursor-pointer self-end hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray focus-visible:ring-offset-2 active:scale-95 
      ${value == "Save" ? "self-end mr-5" : null}`}
      onClick={() => onClick()}
    >
      {value}
    </button>
  );
};

export default Button;
