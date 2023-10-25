import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {PiArrowsHorizontalLight} from 'react-icons/pi';

const PriceRangeSlider = () => {
  const [sliderValue, setSliderValue] = useState([50, 450]);

  const handleSliderChange = (values) => {
    setSliderValue(values);
  };

  return (
    <div>
      <Slider
        range
        min={1}
        max={1000}
        defaultValue={sliderValue}
        onChange={handleSliderChange}
      />
      <div className="my-3 flex items-center space-x-2">
      <span className='px-3 py-2 bg-gray-200 text-sm'>${sliderValue[0]}</span>
      <PiArrowsHorizontalLight/>
      <span className='px-3 py-2 bg-gray-200 text-sm'>${sliderValue[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
