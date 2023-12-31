import React, { useRef, useEffect } from "react";
import Icon from "../SVG/Icon";
import gsap from "gsap";
import images from "../../constants/images";
import ThemeButton from "../ThemeButton/ThemeButton";

const preloadImages = (imageArray) => {
  const promises = [];

  for (const imageSrc of imageArray) {
    const promise = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.src = imageSrc;
    });

    promises.push(promise);
  }

  return promises;
};

const PageLoader = () => {
  const pageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    Promise.all(preloadImages(Object.values(images)));
  }, []);

  useEffect(() => {
    const pageAnimation = gsap.fromTo(
      pageRef.current,
      { opacity: 1 },
      { opacity: 0, repeat: -1, yoyo: true, duration: 1.5, delay: 10 }
    );

    const textAnimation = gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, repeat: -1, yoyo: true, duration: 2, delay: 2 }
    );

    return () => {
      pageAnimation.kill();
      textAnimation.kill();
    };
  }, []);

  return (
    <>
      <ThemeButton invisibe={"invisible"} />
      <div
        className="absolute top-0 left-0 flex items-center justify-center h-screen w-full bg-hero z-20 dark:bg-[#252A2F]"
        ref={pageRef}
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center py-2 px-8">
          <Icon width={150} height={150} />
          <div className="content">
            <h1
              className=" font-medium text-3xl leading-normal tracking-normal text-dark-blue dark:text-accent"
              ref={textRef}
            >
              Noteli
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLoader;
