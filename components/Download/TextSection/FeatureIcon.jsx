import React from 'react'

const FeatureIcon = ({Icon,feature}) => {
  return (
    <section className='flex gap-2'>
        <div className='bg-customGreen flex justify-center items-center rounded-full w-[24px] h-[24px]'>
        <img src={Icon} alt={feature} className='w-[12.94px] h-[11.52px]'/>
        </div>
        <p className='font-medium text-[16px] opacity-[75%] font-inter'>{feature}</p>
    </section>
  )
}

export default FeatureIcon