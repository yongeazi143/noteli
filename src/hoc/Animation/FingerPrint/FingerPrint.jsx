import { useEffect, useRef } from "react";
import gsap from "gsap";
import images from "../../../constants/images";

const Fingerprint = () => {
  const fingerprintRef = useRef(null);

  useEffect(() => {
    const bounceTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    bounceTimeline.to(fingerprintRef.current, {
      y: -50,
      duration: 0.5,
    });

    return () => {
      bounceTimeline.kill();
    };
  }, []);

  return (
    <img
      ref={fingerprintRef}
      src={images.FingerPrint}
      className="mx-auto w-16 h-16"
      alt="FingerPrint"
    />
  );
};

export default Fingerprint;
