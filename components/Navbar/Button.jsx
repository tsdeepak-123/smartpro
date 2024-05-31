import React from 'react';

const Button = ({ icon, name, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    width: name ? '92.74px' : '36px',
    height: '36px'
  };

  return (
    <button
      style={buttonStyle}
      className="flex items-center justify-center max-h-[36px] text-white rounded-md focus:outline-none"
    >
      {icon && <img src={icon} alt="Icon" className="max-w-[16.74px] max-h-[18px]" />}
      {name && <span className="ml-2 font-inter">{name}</span>}
    </button>
  );
}

export default Button;
