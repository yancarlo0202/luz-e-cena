import React from 'react'

interface SelectOption extends React.OptionHTMLAttributes<HTMLOptionElement>{
    label: string;
    value: string;
}

const SelectorOption = ({label, value, ...rest}: SelectOption) => {
  return (
    <option value={value} {...rest}>
        {label}
    </option>
  );
};

export default SelectorOption