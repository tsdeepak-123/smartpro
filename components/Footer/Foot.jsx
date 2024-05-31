import React from 'react';

const Foot = () => {
  // Define your list of items
  const menuItems = [
    'Terms & Conditions',
    'Privacy Policy',
    'Refund & Cancellation',
    'Disclaimer',
    'Sitemap'
  ];

  return (
    <section className='flex justify-between items-center'>
      <div className='flex gap-6'>
        <div>
          <img src="/assets/Images/Logo.png" alt="" className='w-[139.47px] h-[50px]'/>
        </div>
        <div className='flex flex-col mt-2'>
          <p className='text-[14px] opacity-[80%] font-inter text-TextColor'>© 2023 SmotPro India Private Limited.</p>
          <p className='text-[14px] opacity-[80%] font-inter text-TextColor'>All Rights Reserved.</p>
        </div>
      </div>
      <div>
        <ul className='flex gap-4 font-inter text-[14px] text-TextColor'>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Foot;
