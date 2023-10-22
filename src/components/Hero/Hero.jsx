import { Link } from "react-router-dom";
import images from "../../constants/images";
import Chart from "../../UI/SVG/Chart";
import TextAnimation from "../../hoc/Animation/TextAnimation/TextAnimate";
import WaterDrop from "../../hoc/Animation/WaterDrop/WaterDrop";
import gsap from "gsap";
import ImageAnimation from "../../hoc/Animation/ImgAmination/ImgAnimation";

const Hero = () => {
  const handleFirstAnimationComplete = () => {
    gsap.to(".secure-word", {
      color: "#F48C06",
      duration: 1,
      ease: "ease-in-out",
    });
  };
  return (
    <section
      className="relative top-[69px] bg-hero flex flex-col-reverse items-center justify-start font-poppins p-2 -z-[2] rounded-bl-full rounded-br-full md:flex-row-reverse
  md:rounded-bl-[35%] md:rounded-br-[35%] md:items-start lg:place-items-center "
      id="home"
    >
      <div className="relative lg:h-auto">
        {/* <img src={} alt="" /> */}
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
            wrapperStyles="text-xl font-bold leading-normal text-dark-blue mb-5 md:text-2xl lg:text-4xl lg:leading-relaxed"
            charStyles="text-orange"
            spanStyles="text-orange"
          />
        </div>
        <p className="text-light-gray font-serif font-medium px-5 md:px-0 text-xl mb-6 lg:text-3xl max-w-lg">
          note.<span className="text-orange">li</span> is an encrypted
          notetaking platform that helps you secure ideas, information online
        </p>
        <WaterDrop>
          <Link
            to="/signup"
            className="text-white hover:text-black transition-all ease-in-out duration-150 text-base font-medium bg-orange px-6 py-3 rounded-full hover:bg-white ring-1 ring-dark-blue"
          >
            Explore
          </Link>
        </WaterDrop>
      </header>
    </section>
  );
};

export default Hero;
