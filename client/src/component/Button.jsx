import React, { useState } from 'react';

function ToggleButton({handleDarkMode}) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
    handleDarkMode()
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="hidden" checked={isChecked} onChange={toggle} />
        <div className={`w-8 h-4 ${!isChecked? 'bg-gray-400' : 'bg-lime-600'} rounded-full shadow-inner`}></div>
        <div className={` absolute w-4 h-4 bg-white rounded-full shadow top-0 left-0 transition-transform ${isChecked ? 'transform translate-x-full' : ''}`}></div>
      </div>
    </label>
  );
}

export default ToggleButton;
