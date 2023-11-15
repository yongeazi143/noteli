import images from "../../constants/images";
import Ratings from "../../containers/Ratings/Ratings";

const Testimonials = () => {
  return (
    <section
      className=" w-full flex flex-col items-center justicfy-center p-5 mb-10 lg:flex-row max-w-[1000px] m-auto lg:justify-between
    "
    >
      <header className="text-center md:text-left max-w-md">
        <div className="flex items-center justify-center gap-3 mb-5 lg:justify-start">
          <div className="w-10 h-[1.5px] bg-orange" />
          <p className="uppercase font-medium text-3xl text-orange">
            Testimonial
          </p>
        </div>
        <h1 className="text-dark-blue dark:text-blue text-2xl font-medium font-poppins mb-5 text-center lg:text-left">
          What They Say?
        </h1>
        <p
          className="text-gray text-base tracking-widest leading-normal font-serif font-medium text-center lg:text-left
        lg:pt-3 dark:text-neutral-300"
        >
          Note.li has got more than 100k positive ratings from our users around
          the world. <br />
          Most of the our users students, teachers, developers were greatly
          helped by Note.li. <br />
        </p>
      </header>
      <div className="mt-5 relative h-auto lg:w-1/2">
        <div className="relative">
          <img src={images.SmilingWoman} alt="testimonials" />
          <div className="absolute top-1/2 bottom-1/2 -right-5">
            <i className="bx bx-chevron-right bx-md bx-border-circle shadow-sm shadow-nav-blue text-light-blue bg-white transition-colors hover:bg-light-blue hover:text-white"></i>
          </div>
        </div>
        <div
          className="w-full mt-5 h-48 shadow-xl rounded-md bg-footer 
      border-l-8 border-[#f17e13] p-3 flex flex-col items-start justify-between max-w-xs
      md:absolute md:-right-20 md:-bottom-5"
        >
          <p className="text-gray-100 font-serif text-base font-normal">
            {`Thank you so much for your help. It's exactly what I've been looking
          for. You won't regret it. It really saves me time and effort. Note.li
          is exactly what our business has been lacking.`}
          </p>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-100  font-serif text-base font-normal">
              James Israel
            </p>
            <Ratings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
