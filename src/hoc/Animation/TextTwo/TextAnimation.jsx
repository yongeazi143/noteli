import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTextTwo = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    gsap.set(textRef.current, { opacity: 0, y: 20 });

    tl.from(textRef.current, { opacity: 0, y: 20 }).to(
      textRef.current,
      { opacity: 1, y: 0 },
      "-=0.5"
    );
  }, []);

  return (
    <p
      ref={textRef}
      className="text-light-gray dark:text-neutral-300 font-serif font-medium px-5 md:px-0 text-xl mb-6 lg:text-2xl max-w-lg "
    >
      noteli is an encrypted notetaking platform that helps you secure ideas,
      information online
    </p>
  );
};

export default AnimatedTextTwo;
