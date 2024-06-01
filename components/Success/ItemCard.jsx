const ItemCard = ({ Icon, title, description }) => {
  return (
    <section className="shadow-lg rounded-[20px] w-full h-[auto] md:h-[247px] p-4 flex flex-col justify-center items-center">
      <div className="flex flex-col items-start w-full">
        <div className="w-[93.25px] h-[93.25px] mb-3">
          <img
            src={Icon}
            alt="Background Icon"
            className="w-[76.14px] h-[76.14px]"
          />
        </div>
        <div>
          <p className="text-TextColor text-[16px] font-medium mb-2 text-left font-inter">
            {title}
          </p>
          <p className="text-Paragraph text-[14px] mb-2 text-left font-inter opacity-[70%]">
            {description}
          </p>
          <p className="flex items-center gap-2 text-Readmore text-[16px] font-medium text-left cursor-pointer font-inter">
            Read More{" "}
            <img
              src="/assets/svg/Success/Arrow.svg"
              alt="Arrow Icon"
              className="mt-[3px]"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
