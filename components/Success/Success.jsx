import React from 'react'
import ItemCard from '../Success/ItemCard'

const Success = () => {
  const items = [
    { icon: '/assets/svg/Success/Digital.svg', title: 'Digital Transformation', description: 'Embracing by implementing innovative technologies and strategies to improve..' },
    { icon: '/assets/svg/Success/Training.svg', title: 'Training and Education', description: 'We provide training and knowledge transfer to internal teams, ensuring...' },
    { icon: '/assets/svg/Success/Global.svg', title: 'Global Reach', description: 'We have a global presence, allowing we to offer services internationally...' },
    { icon: '/assets/svg/Success/Custom.svg', title: 'Custom Solutions', description: 'We assessing current technology infrastructure, identifying opportunities...' },
  ];

  return (
    <section className='max-w-[1440px] h-[380px] flex flex-col '>
      <div className='h-[321px] flex flex-col justify-start ml-14'>
        <p className='text-[30px] text-TextColor font-bold'>We lead you to Success</p>
      </div>
      <div className='flex flex-wrap justify-center mx-auto gap-3 mb-16'>
        {items.map((item, index) => (
          <ItemCard key={index} Icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  )
}

export default Success