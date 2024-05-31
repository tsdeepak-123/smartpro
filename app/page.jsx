import BlogSection from '@/components/Blogs/BlogSection'
import Download from '@/components/Download/Download'
import Hero from '@/components/Hero/Hero'
import Success from '@/components/Success/Success'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <section className=''>
      <Hero/>
      <WhyChoose/>
      <Success/>
      <BlogSection/>
      <Download/>
    </section>
  )
}

export default page