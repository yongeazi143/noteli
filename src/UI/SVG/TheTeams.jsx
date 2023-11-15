import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../../constants/images";

const TheTeams = () => {
  const teamsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(teamsRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: teamsRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={teamsRef} className="relative mt-10 md:w-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="absolute -top-10 left-36"
      >
        <circle cx="15" cy="15" r="15" fill="#33D9EF" />
      </svg>
      {/* The Teams Images */}
      <img src={images.Teams} alt="the-team" />
      <svg
        width="160"
        height="160"
        viewBox="0 0 264 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-5 bottom-0 -z-10"
      >
        <circle cx="132" cy="132" r="132" fill="#5B61EB" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-3 left-40"
      >
        <circle cx="15" cy="15" r="15" fill="#F56666" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        className="absolute -top-12 -z-10"
      >
        <circle cx="70" cy="70" r="70" fill="#33EFA0" />
      </svg>
    </div>
  );
};

export default TheTeams;
