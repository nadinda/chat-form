import React from 'react';

const Option = ({ option, triggerNextStep }) => {
  return (
    <div onClick={() => triggerNextStep({ value: option.value, label: option.label })}>
      <p>{option.label}</p>
      <img src={option.src} alt={option.label} width={option.width} height={option.height}/>
    </div>
  );
};

const CustomOptionStep = ({ triggerNextStep, options }) => (
  <>
    {options.map((option) => (
      <Option option={option} triggerNextStep={triggerNextStep} key={option.value} />
    ))}
  </>
);

export default CustomOptionStep;