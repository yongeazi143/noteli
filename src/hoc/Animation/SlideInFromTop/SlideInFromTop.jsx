import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SlideInFromTop = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    timeline.fromTo(
      headerRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div ref={headerRef} className="font-poppins text-center">
      <h1 className="font-semibold text-2xl text-blue">
        Who can use <span className="text-orange">Note.li?</span>
      </h1>
      <p className="text-gray-100 text-base font-normal tracking-widest leading-[43.2px] px-2 max-w-3xl mx-auto">
        Note.li is designed for anyone seeking a secure and efficient solution
        to capture and organize their ideas. Whether you’re a student,
        professional, creative thinker, or someone who values privacy, note.li
        provides a <br /> user-friendly platform for individuals across various
        domains. The app caters to those who prioritize the confidentiality and
        accessibility of their thoughts, making it a versatile tool for a wide
        range of users.
      </p>
    </div>
  );
};

export default SlideInFromTop;
