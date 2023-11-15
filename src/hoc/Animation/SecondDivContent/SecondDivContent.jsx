import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../../../constants/images";

const SecondDivContent = () => {
  const secondDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(secondDivRef.current, {
      x: "100%",
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: secondDivRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={secondDivRef}
      className="flex flex-col items-center justify-center mt-5 md:items-baseline md:w-1/2"
    >
      <h3 className="font-poppins font-bold text-2xl text-dark-blue dark:text-blue">
        what sets us <span className="text-orange">apart</span>
      </h3>
      <ul className="mt-5">
        <li className="flex items-start justify-center gap-2">
          <img src={images.Box1} alt="list-box" className="mt-2" />
          <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5 mb-5 dark:text-neutral-300">
            Note.li employs cutting-edge encryption technologies to ensure that
            your notes remain confidential and secure.
          </p>
        </li>
        <li className="flex items-start justify-center gap-2 mb-5">
          <img src={images.Box2} alt="list-box" className="mt-2" />
          <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5 dark:text-neutral-300">
            We understand the importance of a seamless user experience. Note.li
            offers an intuitive interface, making it easy for you to create,
            organize, and manage your notes effortlessly.
          </p>
        </li>
        <li className="flex items-start justify-center gap-2 mb-5">
          <img src={images.Box3} alt="list-box" className="mt-2" />
          <p className="text-light-gray font-poppins text-xl font-normal leading-7 tracking-[0.44px] md:px-5 dark:text-neutral-300">
            Your privacy is our top priority. We do not collect unnecessary user
            data, and our commitment to privacy extends to every aspect of our
            application.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SecondDivContent;
