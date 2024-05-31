import React from 'react';

const DownloadButton = ({ name, Icon }) => {
  return (
    <button className="flex items-center border-2 border-Readmore text-Readmore py-2 px-4 rounded-[10px] w-[150px] h-[50px] bg-transparent">
      <img src={Icon} alt="icon" className="w-[25.38px] h-[27.62px] mr-2" />
     <span className='text-[15px]'> {name}</span>
    </button>
  );
}

export default DownloadButton;
