import React from 'react'
import SupportIcon from './SupportIcon'
import SocialMadia from './SocialMadia'
import Locations from './Locations'

const Support = () => {
  return (
    <section className='flex flex-col justify-between'>
        <div>
        <p className='font-inter font-semibold text-[16px] text-TextColor'>Customer Support</p> 
        <div className='flex gap-2 relative top-2'>
            <SupportIcon Icon={"/assets/svg/Footer/Call.svg" } Item={'+91 8880099371'}/>
            <SupportIcon  Icon={"/assets/svg/Footer/Message.svg" } Item={'info@smotpro.com'}/>
        </div>
        </div>
        <div>
        <p className='font-inter font-semibold text-[16px] text-TextColor'>Stay Connected</p> 
        <div className='relative top-2'>
        <SocialMadia/>
        </div>
        </div>
        <div className='w-[486px] h-[68.64px] mb-4'>
        <p className='font-inter font-semibold text-[16px] text-TextColor'>Our Locations</p> 
        <div className='relative top-2'>
        <Locations/>
        </div>
        
        </div>
     
    </section>
  )
}

export default Support