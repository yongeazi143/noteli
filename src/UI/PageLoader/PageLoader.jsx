import React, { useLayoutEffect, useRef, useEffect } from "react";
import Icon from "../SVG/Icon";
import gsap from "gsap";
import images from "../../constants/images";

const PageLoader = () => {
  const pageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Preload images
    Object.values(images).forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useLayoutEffect(() => {
    const pageAnimation = gsap.fromTo(
      pageRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 10 }
    );

    const textAnimation = gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 2 }
    );

    return () => {
      pageAnimation.kill();
      textAnimation.kill();
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center h-screen w-full bg-hero z-20"
      ref={pageRef}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center py-2 px-8">
        <Icon width={150} height={150} />
        <div className="content">
          <h1
            className="font-poppins font-medium text-3xl leading-normal uppercase tracking-normal text-dark-blue"
            ref={textRef}
          >
            Note.li
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
