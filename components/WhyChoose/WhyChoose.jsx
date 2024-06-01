import TextSection from "./TextSection";
import ItemSection from "./ItemSection";

const WhyChoose = () => {
  return (
    <section className="max-w-[1440px] h-[444px] px-14 py-16 flex justify-between items-center">
      <TextSection />
      <div className="flex justify-end w-2/5">
        <ItemSection />
      </div>
    </section>
  );
};

export default WhyChoose;
