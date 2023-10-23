import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = () => {
  const [sliderValue, setSliderValue] = useState([25, 75]);

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
      <div className="text-center">
        Price Range: ${sliderValue[0]} - ${sliderValue[1]}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
