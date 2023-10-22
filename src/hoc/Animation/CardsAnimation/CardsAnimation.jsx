import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAnimation = ({ children, forwardRef }) => {
  const cardsRef = useRef();

  useEffect(() => {
    const cards = cardsRef.current.children;

    gsap.set(cards, { y: "+=100%", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top bottom",
        end: "center top",
        scrub: true,
      },
    });

    tl.to(cards, { opacity: 1, y: 0, stagger: 0.2 });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div
      ref={(el) => {
        cardsRef.current = el;
        if (typeof forwardRef === "function") {
          forwardRef(el);
        }
      }}
      className="m-auto max-w-[800px] flex flex-col items-center justify-center md:flex-row flex-wrap"
    >
      {children}
    </div>
  );
};

export default CardAnimation;
