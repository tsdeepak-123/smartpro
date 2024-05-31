import React from 'react';

const Qrcode = () => {
  return (
    <section className="flex flex-row">
      <img src="/assets/Images/Qrcode.png" alt="QR Code" className="w-[68px] h-[68px] mr-4" />
      <div className="relative top-4">
        <h2 className="text-[18px] font-semibold font-inter">Get it now!</h2>
        <p className="text-black text-[16px] opacity-[75%] font-inter">From play store & app store</p>
      </div>
    </section>
  );
}

export default Qrcode;
