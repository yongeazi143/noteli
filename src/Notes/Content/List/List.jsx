const ListContent = ({ content }) => {
  return (
    <ul>
      {content.map((item, index) => {
        console.log(item);

        return (
          <li
            className="text-base font-serif text-gray font-medium pr-4 group-hover:text-white"
            key={index}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListContent;
