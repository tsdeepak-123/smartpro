const ItemCard = ({ name, backgroundIcon }) => {
  return (
    <section className="w-[160px] h-[160px] border border-StrokeBlue rounded-[20px] flex flex-col items-center">
      <div className="w-[93.25px] h-[93.25px]  flex items-center justify-center">
        <img
          src={backgroundIcon}
          alt="Background Icon"
          className="w-[76.14px] h-[76.14px]"
        />
      </div>
      <div className="w-[106px] h-[44px]">
        <p className="text-[18px] font-medium text-Paragraph text-wrap text-center leading-[1.3] font-inter">
          {name}
        </p>
      </div>
    </section>
  );
};

export default ItemCard;
