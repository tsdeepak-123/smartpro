import React from 'react';

const BlogCard = ({ image, title, description, date }) => {
  const [day, month, year] = date.split(' ');

  return (
    <section className='w-[315px] h-[335px] border border-StrokeBlue flex flex-col overflow-hidden' style={{borderRadius: '0 10px 10px 10px'}}>
      <div className='relative w-full h-[200px]'>
        <img
          src={image}
          alt={title}
          className='h-full  object-cover'
          style={{borderRadius: '0px 10px 0 0'}}
        />
        <div className='absolute bottom-4 right-0 bg-customGreen text-white text-xs px-2 py-1 rounded text-center'>
          <div className='text-[16px] font-bold font-inter'>{day}</div>
          <div className='text-[10px] font-inter'>{`${month}, ${year}`}</div>
        </div>
      </div>
      <div className='p-4'>
        <h2 className='text-[16px] text-TextColor font-semibold font-inter'>{title}</h2>
        <p className='text-[13px] text-TextColor font-inter'>{description}</p>
      </div>
    </section>
  );
};

export default BlogCard;
