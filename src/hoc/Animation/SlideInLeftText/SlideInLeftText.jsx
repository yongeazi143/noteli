import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideInLeftText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1 },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
      },
    });

    gsap.set(textRef.current, { x: "100%", opacity: 0 });

    tl.to(textRef.current, { x: "0%", opacity: 1 });
  }, []);

  return (
    <p
      ref={textRef}
      className="text-gray font-normal font-poppins px-5 md:px-0
          text-xl mb-20 max-w-lg mx-auto"
    >
      noteli is one powerful online platform that combines all the features
      needed to protect, encrypt, share and collaborate your ideas.
    </p>
  );
};

export default SlideInLeftText;
