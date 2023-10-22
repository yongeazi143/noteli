import SingleFeature from "./SingleFeature/SingleFeature";
import appFeatures from "../../constants/features";

const Features = () => {
  return (
    <section className="mt-28 flex flex-col items-center" id="features">
      <div className="mx-auto text-center mt-5">
        <h1 className="text-xl font-serif font-medium leading-normal text-blue mb-5 md:text-2xl lg:text-4xl lg:leading-relaxed">
          Core features and <span className="text-orange">functionality</span>
        </h1>
        <p
          className="text-gray-100 font-serif font-light px-5 md:px-0
          text-2xl mb-20 max-w-lg "
        >
          note.
          <span className="text-orange">li</span> is one powerful online
          platform that combines all the features needed to protect, encrypt,
          share and collaborate your ideas.
        </p>
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
