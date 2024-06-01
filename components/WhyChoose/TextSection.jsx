import Button from "../Button/Button";

const TextSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="font-bold text-[30px] text-TextColor font-inter">
        Why Choose SmotPro
      </p>
      <p className="text-[18px] text-Paragraph font-inter opacity-[70%]">
        We’re a Kerala government undertaking focussing on<br></br> upskilling
        to enhance employability through demand-<br></br>based and industry-led
        training.
      </p>
      <Button name="About SmortPro" />
    </section>
  );
};

export default TextSection;
