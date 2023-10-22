import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const WaterDrop = ({ children }) => {
  const dropRef = useRef(null);

  useEffect(() => {
    const dropElement = dropRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(dropElement, {
      scale: 1.2,
      duration: 0.2,
      ease: "power2.out",
    });

    tl.to(dropElement, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in",
    });

    dropElement.addEventListener("mouseenter", () => {
      tl.play();
    });

    dropElement.addEventListener("mouseleave", () => {
      tl.reverse();
    });

    return () => {
      dropElement.removeEventListener("mouseenter", () => {
        tl.play();
      });
      dropElement.removeEventListener("mouseleave", () => {
        tl.reverse();
      });
    };
  }, []);

  return (
    <div ref={dropRef} className="w-max">
      {children}
    </div>
  );
};

export default WaterDrop;
