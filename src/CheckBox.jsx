import React from 'react';

const CheckBox = (props) => {
  return (
    <input checked={props.checked} onChange={props.onChange} type="checkbox" className="w-4 h-4 
      border-gray-300 rounded"/>
  );
}

export default CheckBox;