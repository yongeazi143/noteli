import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ImageAnimation = ({ imageUrl, altText, animationProps }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      image,
      { opacity: 1, scale: 0.5, rotation: -45 },
      { opacity: 1, scale: 1, rotation: 0, ...animationProps }
    );
    return () => {
      const allTriggers = ScrollTrigger.getAll();
      allTriggers.forEach((instance) => instance.kill());
    };
  }, []);

  return <img ref={imageRef} src={imageUrl} alt={altText} />;
};

export default ImageAnimation;
