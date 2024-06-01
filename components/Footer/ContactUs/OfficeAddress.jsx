const OfficeAddress = () => {
  return (
    <section>
      <h4 className="font-semibold text-TextColor mb-1 text-[16px]">
        Corporate Address
      </h4>
      <ul className="font-inter">
        <li className="mb-1 text-[16px] text-TextColor">
          itemSmotPro India Pvt. Ltd.
        </li>
        <li className="mb-1 text-[16px] text-TextColor">
          #1308, Shetty Plaza,
        </li>
        <li className="mb-1 text-[16px] text-TextColor">
          Jeevan Bhima Nagar Main Road,
        </li>
        <li className="mb-1 text-[16px] text-TextColor">
          Bengaluru - 560008, Karnataka, India.
        </li>
      </ul>
      <div className="w-[202px] h-[52px] bg-blue-200 rounded-[10px] flex items-center justify-center gap-2">
        <img
          src="/assets/svg/Footer/Whatsapp.svg"
          alt=""
          className="w-[28px] h-[28px]"
        />
        <p className="font-inter text-customBlue text-[16px] font-semibold">
          +91 9901243847
        </p>
      </div>
    </section>
  );
};

export default OfficeAddress;
