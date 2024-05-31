import React from 'react'
import WatchVideo from './WatchVideo'
import Student from './Student'

const TextFooter = () => {
  return (
    <section className='flex gap-14'>
      <WatchVideo />
      <Student />
      <div className='flex gap-3'>
        <button className='w-[30px] h-[30px]'>
          <img src="/assets/svg/WhatPeople/LeftArrow.svg" alt="Left Arrow" />
        </button>
        <div className='relative top-4'>
          <button className='w-[30px] h-[30px]'>
            <img src="/assets/svg/WhatPeople/RightArrow.svg" alt="Right Arrow" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TextFooter
