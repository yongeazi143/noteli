import images from "../../../constants/images";

const cardDetails = [
  {
    src: images.Business,
    text: "FOR ENTREPRENEURS AND BUSINESS OWNERS",
  },
  {
    src: images.Students,
    text: "FOR STUDENTS AND TEACHERS",
  },
  {
    src: images.Security,
    text: "FOR PRIVACY CONSCIOUS INDIVIDUALS",
  },
  {
    src: images.Tech,
    text: "FOR CREATIVE PROFESSIONALS",
  },
];

const Card = () => (
  <>
    {cardDetails.map((item, index) => (
      <div
        key={index}
        className="m-3 w-[90.5%] md:w-[350px] h-[300px] rounded-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${item.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
        }}
      >
        <p className="text-center font-unica bg-white w-56 text-xl font-bold tracking-widest leading-[43.2px] p-3 text-black rounded-md bg-opacity-70">
          {item.text}
        </p>
      </div>
    ))}
  </>
);

export default Card;
