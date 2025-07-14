import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonListProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonList: React.FC<RadioButtonListProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="radio-button-list">
      {options.map((option) => (
        <label key={option.value} style={{ marginRight: '1rem' }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonList;
