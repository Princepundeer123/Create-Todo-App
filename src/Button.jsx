import React from 'react';

function Button(props) {
  let themeClasses = 'bg-yellow-500 text-white border-white-500 border-transparant';
   let radiusClass = "rounded-md";

  if(props.theme === 'highlight'){
    radiusClass = 'rounded-full';
  }
  if(props.theme === 'secondary'){
    themeClasses = 'bg-white hover:bg-blue';
  } 
  
  return(
     <button disabled={props.disabled} onClick={props.onClick} className={"border shadow-sm inline-flex justify-center items-center px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-yellow-500 " + themeClasses + ' ' + radiusClass}>
       {props.icon && <span className="mr-2 textk-sm">{props.icon}</span>}{props.children}</button>
  );
}
export default Button;