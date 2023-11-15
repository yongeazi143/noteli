import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TheTeams from "../../UI/SVG/TheTeams";
import images from "../../constants/images";
import SecondDivContent from "../../hoc/Animation/SecondDivContent/SecondDivContent";

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(aboutUsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: aboutUsRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    gsap.from(visionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="about-us" className="overflow-hidden">
      <header ref={aboutUsRef} className="mt-10 font-poppins text-center">
        <h1 className="font-semibold text-2xl text-dark-blue dark:text-blue">
          About <span className="text-orange">Us</span>
        </h1>
        <p className="text-base font-normal tracking-widest leading-7 p-5 max-w-xl mx-auto text-gray dark:text-neutral-300 mb-5">
          At noteli, we believe in the power of secure and seamless note-taking.
          Our mission is to provide you with a platform where you can
          confidently jot down your thoughts, ideas, and sensitive information,
          knowing that your data’s is protected by state-of-the-art security
          measures.
        </p>
      </header>
      <div className="m-auto flex flex-col items-center justify-center md:flex-row p-4">
        <TheTeams />
        <SecondDivContent />
      </div>
      {/* Our Vision */}
      <div className="flex flex-col-reverse items-end gap-5 md:flex-row my-5 p-2 pb-10">
        <header ref={visionRef} className="p-5 text-center md:text-left">
          <h3
            className="font-poppins  font-bold text-2xl text-dark-blue my-5
        dark:text-blue"
          >
            Our <span className="text-orange">Vision</span>
          </h3>
          <p className="text-lg font-serif font-normal tracking-widest leading-7 max-w-xl mx-auto text-gray mb-5 dark:text-neutral-300">
            Our vision is to provide you with a platform where you can
            confidently jot down your thoughts, ideas, and sensitive
            information, knowing that your data’s is protected by
            state-of-the-art security measures.
          </p>
        </header>
        <div className="">
          <img src={images.VisionGirl} alt="our-vision-girl" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
