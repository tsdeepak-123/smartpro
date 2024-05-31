
const CardItem = ({ icon, label }) => {
  return (
    <div className="w-[80px] h-[36px] flex flex-col items-center justify-center">
      <img src={icon} alt={label} className="w-[14.7px] h-[16px]" />
      <p className="font-inter text-[12px] text-TextColor opacity-[75%]">
        {label}
      </p>
    </div>
  );
};

export default CardItem;
