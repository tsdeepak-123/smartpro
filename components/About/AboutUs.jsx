import ImageSection from "./ImageSection";
import TextSection from "./TextSection/TextSection";

const AboutUs = () => {
  return (
    <section className="w-full max-w-[1440px] flex">
      <div className="ml-[60px]">
        <ImageSection />
      </div>
      <div className="mt-20">
        <TextSection />
      </div>
    </section>
  );
};

export default AboutUs;
