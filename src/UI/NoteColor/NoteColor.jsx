const NoteColor = ({ onClick, selected, bgColor }) => {
  return (
    <button
      className={`rounded-full ${bgColor}  ${
        selected ? "ring-2 ring-black" : null
      } w-10 h-10 m-1`}
      onClick={() => {
        onClick();
      }}
    ></button>
  );
};

export default NoteColor;
