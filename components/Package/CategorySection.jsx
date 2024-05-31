'use client'

import { useState } from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
  const categories = [
    { Icon: "/assets/svg/Package/Docs.svg", Text: "Docs" },
    { Icon: "/assets/svg/Package/Tours.svg", Text: "Tours" },
    { Icon: "/assets/svg/Package/Study.svg", Text: "Study" },
    { Icon: "/assets/svg/Package/Jobs.svg", Text: "Jobs" }
  ];

  const toursIndex = categories.findIndex(category => category.Text === 'Tours');

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(toursIndex);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className="flex flex-col gap-3 cursor-pointer ml-4">
      {categories.map((category, index) => (
        <CategoryCard 
          key={index} 
          Icon={category.Icon} 
          Text={category.Text} 
          isSelected={selectedCategoryIndex === index} 
          onClick={() => handleCategoryClick(index)} 
        />
      ))}
    </div>
  );
};

export default CategorySection;
