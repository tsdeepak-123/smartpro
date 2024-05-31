import React from 'react'

const Student = () => {
  return (
    <section className='flex items-center gap-2'>
    <img src="/assets/Images/People.png" alt="" className='w-[54px] h-[54px]'/>
    <div className='flex flex-col'>
    <p className='text-[16px] font-semibold text-TextColor relative top-2 font-inter'>Abhishek Kumar</p>
    <p className='text-[14px] opacity-[80%] font-inter'>Oxford Student</p>
    </div>
</section>
  )
}

export default Student