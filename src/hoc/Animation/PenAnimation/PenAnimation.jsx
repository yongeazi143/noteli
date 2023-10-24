import images from "../../../constants/images";

const LoadingAnimation = () => {
  return (
    <div className="flex absolute top-0 left-0 w-full items-center justify-center h-screen bg-[#F3F6FD] overflow-hidden">
      <img src={images.Loader1} alt="loading PenAnimation" />
    </div>
  );
};

export default LoadingAnimation;
