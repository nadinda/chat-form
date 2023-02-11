import React from "react";

const Option = ({ option, triggerNextStep }) => {
  return (
    <div
      onClick={() =>
        triggerNextStep({ value: option.value, label: option.label })
      }
    >
      <p>{option.label}</p>
    </div>
  );
};

const CustomOptionStep = ({ triggerNextStep, options }) => (
  <>
    {options.map(
      option => (
        console.log(option),
        (
          <Option
            option={option}
            triggerNextStep={triggerNextStep}
            key={option.value}
          />
        )
      )
    )}
  </>
);

export default CustomOptionStep;
