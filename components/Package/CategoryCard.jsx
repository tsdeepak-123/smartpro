const CategoryCard = ({ Icon, Text, isSelected, onClick }) => {
  return (
    <section
      className={`w-[150px] h-[90px] border border-gray-300 flex flex-col justify-center items-center space-x-2 rounded-[10px] ${
        isSelected ? "bg-Readmore relative left-6" : ""
      }`}
      onClick={onClick}
    >
      <img src={Icon} alt="" className="w-[32px] h-[32px]" />
      <p
        className={`font-inter text-[16px] text-TextColor ${
          isSelected ? "text-white" : ""
        }`}
      >
        {Text}
      </p>
    </section>
  );
};

export default CategoryCard;
