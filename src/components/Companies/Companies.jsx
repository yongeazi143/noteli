import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Companies = () => {
  const companiesSectionRef = useRef(null);
  const companiesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: companiesSectionRef.current,
        start: "top center",
        end: "top center",
        scrub: 1,
      },
    });

    companiesRef.current.forEach((company, index) => {
      timeline.fromTo(
        company,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 10, stagger: 0.1 },
        index * 0.5
      );
    });
  }, []);

  return (
    <section
      ref={companiesSectionRef}
      className="companies-section w-full p-5 text-center text-[#CFCFCE] overflow-hidden"
    >
      <p className="font-poppins text-lg">
        Trusted by 1,000+ Companies Worldwide
      </p>
      <div className="flex items-center justify-evenly gap-2 font-unica font-bold text-4xl my-5 h-[300px] md:flex-row md:h-auto flex-wrap">
        <p
          ref={(el) => (companiesRef.current[0] = el)}
          className="company text-error"
        >
          HANKO
        </p>
        <p
          ref={(el) => (companiesRef.current[1] = el)}
          className="company text-green"
        >
          SUPABASE
        </p>
        <p
          ref={(el) => (companiesRef.current[2] = el)}
          className="company text-accent"
        >
          HACKTOBER
        </p>
        <p
          ref={(el) => (companiesRef.current[3] = el)}
          className="company text-blue"
        >
          CODERSDEN
        </p>
        <p
          ref={(el) => (companiesRef.current[4] = el)}
          className="company text-sky"
        >
          GITHUB
        </p>
      </div>
    </section>
  );
};

export default Companies;
