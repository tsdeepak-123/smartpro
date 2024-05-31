import React from 'react';

const Locations = () => {
  const locations = [
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Mumbai',
    'Andhra Pradesh',
    'Tamilnadu',
    'Delhi',
    'Gurgaon'
  ];

  return (
    <section className='max-w-[486px]'>
      <ul className='flex text-[14px] flex-wrap gap-2 font-inter text-TextColor'>
        {locations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
