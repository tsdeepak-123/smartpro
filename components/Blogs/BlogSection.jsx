import React from 'react';
import BlogCard from '../Blogs/BlogCard';
import Button from '../Button/Button';

const BlogSection = () => {
  const items = [
    { image: '/assets/Images/Blogs/Office.png', title: 'Meeting with Counsellor', date: '30 Sep 2023', description: 'Student profiles are thoroughly assessed in order to advise the student towards the desired career outcome.' },
    { image: '/assets/Images/Blogs/Application.png', title: 'Application Filling', date: '26 Sep 2023', description: 'We offers guidance to understand the tedious process of applications and a better understanding of the expectation of the...' },
    { image: '/assets/Images/Blogs/Visa.png', title: 'Visa & Onboarding', date: '22 Sep 2023', description: 'Our education advisors are well versed with the visa application requirements of different countries and provide assistance regarding..' },
    { image: '/assets/Images/Blogs/Network.png', title: 'Network Support', date: '25 Sep 2023', description: 'We also offers post arrival assistance to the students that we place in various universities across the world.' },
  ];

  return (
    <section className='max-w-[1440px] py-8 flex justify-center'>
      <div className='flex flex-col w-full max-w-[1301px] justify-center'>
        <div className='flex justify-between items-center'>
          <p className='text-[30px] text-TextColor font-bold font-inter'>Latest Blogs</p>
          <Button name={'View All'} />
        </div>
        <div className='flex flex-wrap justify-center gap-3 mt-8'>
          {items.map((item, index) => (
            <BlogCard key={index} image={item.image} title={item.title} description={item.description} date={item.date} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
