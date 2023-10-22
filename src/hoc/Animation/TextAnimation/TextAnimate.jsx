import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TextAnimation = ({
  text,
  animationProps,
  wrapperStyles,
  charStyles,
  spanStyles,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const characters = text.split("");

    const charElements = characters.map((char, index) => {
      if (char === " ") {
        return `<span class="char" style="opacity:0;">${char}</span>`;
      } else {
        return `<span class="char" style="${
          char === "S" ? spanStyles : charStyles
        }" ref="${index}">${char}</span>`;
      }
    });

    textElement.innerHTML = charElements.join("");

    const tl = gsap.timeline({
      ...animationProps,
    });

    tl.from(".char", {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 2,
      ease: "power4.out",
    });

    tl.eventCallback("onComplete", () => {
      gsap.to(textElement.querySelector(".char:nth-child(1)"), {
        color: "#F48C06",
        duration: 1,
        ease: "bounce.in",
      });
      gsap.to(textElement.querySelector(".char:nth-child(2)"), {
        color: "#F48C06",
        duration: 2,
        ease: "ease-in",
      });
      gsap.to(textElement.querySelector(".char:nth-child(3)"), {
        color: "#F48C06",
        duration: 3,
        ease: "ease-in-out",
      });
      gsap.to(textElement.querySelector(".char:nth-child(4)"), {
        color: "#F48C06",
        duration: 4,
        ease: "ease",
      });
      gsap.to(textElement.querySelector(".char:nth-child(5)"), {
        color: "#F48C06",
        duration: 5,
        ease: "ease-in-out",
      });
      gsap.to(textElement.querySelector(".char:nth-child(6)"), {
        color: "#F48C06",
        duration: 6,
        ease: "elastic.out(1, 0.3)",
      });
    });
  }, [text, animationProps, charStyles, spanStyles]);

  return <div className={wrapperStyles} ref={textRef}></div>;
};

export default TextAnimation;
