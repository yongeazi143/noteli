import { Link } from "react-router-dom";
import images from "../../constants/images";
import Chart from "../../UI/SVG/Chart";

const Hero = () => (
  <section
    className="relative top-[69px] bg-hero flex flex-col-reverse items-center justify-start font-poppins p-2 -z-[2] rounded-bl-full rounded-br-full md:flex-row-reverse
  md:rounded-bl-[35%] md:rounded-br-[35%] md:items-start lg:place-items-center "
  >
    <div className="relative lg:h-auto">
      <img src={images.HeroWoman} alt="hero-woman-images" />
      <div className="absolute top-1/4 right-0">
        <Chart />
      </div>
    </div>
    <header className="mt-16 p-2 pb-5 text-center md:text-left md:ml-8 lg:h-[400px]">
      <h1 className="text-xl font-bold leading-normal text-dark-blue mb-5 md:text-2xl lg:text-4xl lg:leading-relaxed">
        <span className="text-orange">Secure</span> your ideas online by using
        encrypted note.
      </h1>
      <p className="text-light-gray font-serif font-medium px-5 md:px-0 text-xl mb-6 lg:text-3xl max-w-lg">
        note.<span className="text-orange">li</span> is an encrypted notetaking
        platform that helps you secure ideas, information online
      </p>
      <Link
        to="/signup"
        className="text-white hover:text-black transition-all ease-in-out duration-150 text-base font-medium bg-orange px-6 py-3 rounded-full hover:bg-white ring-1 ring-dark-blue"
      >
        Sign Up
      </Link>
    </header>
  </section>
);

export default Hero;
