import AboutUs from '@/components/About/AboutUs'
import BlogSection from '@/components/Blogs/BlogSection'
import Download from '@/components/Download/Download'
import Hero from '@/components/Hero/Hero'
import TourPackage from '@/components/Package/TourPackage'
import Success from '@/components/Success/Success'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <section className=''>
      <Hero/>
      <WhyChoose/>
      <TourPackage/>
      <Success/>
      <AboutUs/>
      <BlogSection/>
      <Download/>
    </section>
  )
}

export default page