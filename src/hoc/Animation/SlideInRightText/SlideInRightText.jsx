import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideInRightText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
      },
    });

    gsap.set(textRef.current, { x: "-100%", opacity: 0 });

    tl.to(textRef.current, { x: "0%", opacity: 1 });
  }, []);

  return (
    <h1
      ref={textRef}
      className=" font-unica font-bold leading-normal text-blue mb-5 md:text-2xl text-4xl lg:text-6xl lg:leading-relaxed"
    >
      Core features and <span className="text-orange">functionality</span>
    </h1>
  );
};

export default SlideInRightText;
