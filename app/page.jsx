import BlogSection from '@/components/Blogs/BlogSection'
import Hero from '@/components/Hero/Hero'
import Success from '@/components/Success/Success'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <section>
      <Hero/>
      <WhyChoose/>
      <Success/>
      <BlogSection/>
    </section>
  )
}

export default page