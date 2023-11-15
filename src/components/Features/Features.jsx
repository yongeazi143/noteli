import SingleFeature from "./SingleFeature/SingleFeature";
import appFeatures from "../../constants/features";
import SlideInRightText from "../../hoc/Animation/SlideInRightText/SlideInRightText";
import SlideInLeftText from "../../hoc/Animation/SlideInLeftText/SlideInLeftText";

const Features = () => {
  return (
    <section
      className="mt-28 flex flex-col items-center overflow-hidden"
      id="features"
    >
      <div className="mx-auto text-center mt-5">
        <SlideInRightText />
        <SlideInLeftText />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-5 md:gap-8">
        {appFeatures.map((info, index) => (
          <SingleFeature
            title={info.title}
            content={info.content}
            color={info.color}
            icon={info.icon}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
