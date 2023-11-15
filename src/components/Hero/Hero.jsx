import { Link } from "react-router-dom";
import images from "../../constants/images";
import Chart from "../../UI/SVG/Chart";
import TextAnimation from "../../hoc/Animation/TextAnimation/TextAnimate";
import WaterDrop from "../../hoc/Animation/WaterDrop/WaterDrop";
import ImageAnimation from "../../hoc/Animation/ImgAmination/ImgAnimation";
import AnimatedTextTwo from "../../hoc/Animation/TextTwo/TextAnimation";

const Hero = () => {
  return (
    <section
      className="relative top-[69px] bg-hero dark:bg-footer flex flex-col-reverse items-center justify-start font-poppins p-2 -z-[2] rounded-bl-full rounded-br-full md:flex-row-reverse
  md:rounded-bl-[35%] md:rounded-br-[35%] md:items-start lg:place-items-center "
      id="home"
    >
      <div className="relative lg:h-auto right-5">
        <ImageAnimation
          imageUrl={images.HeroWoman}
          altText="hero-woman-images"
          animationProps={{ duration: 3 }}
        />
        <div className="absolute top-1/4 right-0">
          <Chart />
        </div>
      </div>
      <header className="mt-16 p-2 pb-5 text-center md:text-left md:ml-8 lg:h-[400px] flex items-center justify-center flex-col md:block">
        <div>
          <TextAnimation
            text="Secure your ideas online by using encrypted note."
            animationProps={{
              duration: 1.5,
              stagger: 0.1,
              ease: "bounce.out",
            }}
            wrapperStyles="text-xl font-bold leading-normal text-dark-blue  dark:text-accent mb-5 md:text-2xl lg:text-4xl lg:leading-relaxed"
          />
        </div>
        <AnimatedTextTwo />
        <WaterDrop>
          <Link
            to="/signup"
            className="text-white hover:text-black transition-all ease-in-out duration-150 text-base font-medium bg-orange px-6 py-3 rounded-full hover:bg-white ring-1 ring-dark-blue dark:ring-transparent"
          >
            Explore
          </Link>
        </WaterDrop>
      </header>
    </section>
  );
};

export default Hero;
