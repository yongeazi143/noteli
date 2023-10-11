import Star from "./Star/Star";

const Ratings = () => {
  return (
    <div className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default Ratings;
