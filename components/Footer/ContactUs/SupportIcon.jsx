import React from 'react'

const SupportIcon = ({Icon,Item}) => {
  return (
    <div className='flex gap-1  items-center'>
    <img src={Icon} alt="" className='w-[36px] h-[36px]' />
    <p className='font-inter font-medium text-[14px] text-TextColor'>{Item}</p>
</div>
  )
}

export default SupportIcon