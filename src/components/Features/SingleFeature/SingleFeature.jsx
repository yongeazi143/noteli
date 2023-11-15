// SingleFeature.js

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

const SingleFeature = ({ title, content, color, icon }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: featureRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none none", // Restart the animation on each scroll
      },
    });

    gsap.set(featureRef.current, { opacity: 0, x: -20 });

    tl.from(featureRef.current, { opacity: 0, x: -20 }).to(featureRef.current, {
      opacity: 1,
      x: 0,
    });
  }, []);

  return (
    <div
      ref={featureRef}
      className={`group mb-2 relative p-4 pt-10 bg-white dark:bg-info-content dark:hover:bg-footer text-gray 
      md:w-80 w-[80%] h-max min-h-[20rem] rounded-md mx-auto text-center hover:bg-footer transition ease-linear duration-500`}
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h1 className="text-xl font-bold leading-normal text-blue my-5 md:text-2xl font-poppins tracking-wide group-hover:text-gray-100">
        {title}
      </h1>
      <p
        className="text-gray-100 font-serif font-normal px-5 md:px-0
            text-lg mb-6 max-w-lg group-hover:text-gray-100"
      >
        {content}
      </p>
      <div className="absolute left-0 right-0 -top-8">
        <i
          className={`bx ${icon} bx-md bx-border-circle text-white p-4`}
          style={{ backgroundColor: color }}
        ></i>
      </div>
    </div>
  );
};

export default SingleFeature;
