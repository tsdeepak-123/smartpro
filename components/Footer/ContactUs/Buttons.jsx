const Buttons = () => {
  return (
    <div className="flex gap-2">
      <button className="flex items-center border border-Readmore text-Readmore py-2 px-4 rounded-[10px] w-[120px] h-[40px] bg-transparent">
        <img
          src="/assets/svg/Download/Gplay.svg"
          alt="icon"
          className="w-[20.3px] h-[22.09px] mr-2"
        />
        <span className="text-[9px] font-inter font-semibold">Google Play</span>
      </button>
      <button className="flex items-center border border-Readmore text-Readmore py-2 px-4 rounded-[10px] w-[120px] h-[40px] bg-transparent">
        <img
          src="/assets/svg/Download/Apple.svg"
          alt="icon"
          className="w-[20.3px] h-[22.09px] mr-2"
        />
        <span className="text-[9px] font-inter font-semibold">App Store</span>
      </button>
    </div>
  );
};

export default Buttons;
