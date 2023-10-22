import TheTeams from "../../UI/SVG/TheTeams";
import images from "../../constants/images";

const AboutUs = () => (
  <section id="about-us">
    <header className="mt-10 font-poppins text-center">
      <h1 className="font-semibold text-2xl text-dark-blue">
        About <span className="text-orange">Us</span>
      </h1>
      <p className=" text-base font-normal tracking-widest leading-7 p-5 max-w-xl mx-auto text-gray mb-5">
        At note.li , we believe in the power of secure and seamless note-taking.
        Our mission is to provide you with a platform where you can confidently
        jot down your thoughts, ideas, and sensitive information, knowing that
        your data’s is protected by state-of-the art security measures..
      </p>
    </header>
    <div className="m-auto flex flex-col items-center justify-center md:flex-row p-4">
      <TheTeams />
      <div className="flex flex-col items-center justify-center mt-5 md:items-baseline md:w-1/2">
        <h3 className="font-poppins font-bold text-2xl text-dark-blue">
          what set us <span className="text-orange">apart</span>
        </h3>
        <ul className="mt-5">
          <li className="flex items-start justify-center gap-2">
            <img src={images.Box1} alt="list-box" className="mt-2" />
            <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5 mb-5">
              Note.li employs cutting-edge encryption technologies to ensure
              that your notes remains confidential and secure.
            </p>
          </li>
          <li className="flex items-start justify-center gap-2 mb-5">
            <img src={images.Box2} alt="list-box" className="mt-2" />
            <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5">
              We understand the importance of a seamless user experience.
              Note.li offers an intuitive interface, making it easy for you to
              create, organize, and manage your notes effortlessly.
            </p>
          </li>
          <li className="flex items-start justify-center gap-2 mb-5">
            <img src={images.Box3} alt="list-box" className="mt-2" />
            <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5">
              Your privacy is our top priority. We do not unnecessary user data,
              and our commitment to privacy extends to every aspect of our
              application.
            </p>
          </li>
        </ul>
      </div>
    </div>
    {/* Our Vision */}
    <div className="flex flex-col-reverse items-end gap-5 md:flex-row my-5 p-2 pb-10">
      <header className="p-5 text-center md:text-left">
        <h3 className="font-poppins  font-bold text-2xl text-dark-blue my-5">
          Our <span className="text-orange">Vision</span>
        </h3>
        <p className="text-lg font-serif font-normal tracking-widest leading-7 max-w-xl mx-auto text-gray mb-5">
          Our vision is to provide you with a platform where you can confidently
          jot down your thoughts, ideas, and sensitive information, knowing that
          your data’s is protected by state-of-the art security measures..
        </p>
      </header>
      <div className="">
        <img src={images.VisionGirl} alt="our-vision-girl" />
      </div>
    </div>
  </section>
);

export default AboutUs;
