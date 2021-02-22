import React from 'react';
import './ColorPicker.css';

// in-line style (bad practics)
// const style = {
//     option: {
//         display: 'inline-block',
//         margin: 2,
//         padding: 3,
//         outline: '1px solid black'
//     }
// }

const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          // <span key={color} style={style.option}>{label}</span>   without backGroung
          // <span key={color} style={{...style.option, backgroundColor: color}}>{label}</span>   with inline style
          <span
            key={color}
            className="ColorPicker__option"
            style={{ backgroundColor: color }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
