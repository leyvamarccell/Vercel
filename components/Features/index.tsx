import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="-mx-5 lg:mx-7"
      >
        <div className="container">
          <SectionTitle
            title=""
            paragraph=""
            center
          />

          <div className="grid grid-cols-3  md:grid-cols-6 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
