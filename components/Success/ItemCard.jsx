import React from 'react'

const ItemCard = ({ Icon, title, description }) => {
  return (
    <section className='shadow-lg rounded-[20px] w-[311.07px] h-[247px] p-4  flex flex-col justify-center items-center'>
      <div className='flex flex-col items-start w-[266.9px] '>
        <div className='w-[93.25px] h-[93.25px] mb-3'>
          <img
            src={Icon}
            alt='Background Icon'
            className='w-[76.14px] h-[76.14px]'
          />
        </div>
        <div>
          <p className='text-TextColor text-[16px] font-medium mb-2 text-left font-inter'>{title}</p>
          <p className='text-Paragraph text-[14px] mb-2 text-left font-inter'>
            {description}
          </p>
          <p className='flex items-center gap-2 text-Readmore text-[16px] font-medium text-left cursor-pointer font-inter'>
            Read More <img src='/assets/svg/Success/Arrow.svg' alt='Arrow Icon' className='mt-[3px]'/>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ItemCard
