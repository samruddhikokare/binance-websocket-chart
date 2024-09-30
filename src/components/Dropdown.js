import React from 'react';

const Dropdown = ({ options, onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
