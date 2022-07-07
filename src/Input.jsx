import React from 'react';


const Input = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-yellow-500"/>
  );
}

export default Input;