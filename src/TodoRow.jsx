import React from 'react';
import CheckBox from './CheckBox';
import { HiTrash } from "react-icons/hi";


const TodoRow = (props) => {

  const onCheckBoxChange = () => {
    props.onStatusChange(props.todo);
  } 

 const onDelete = () => {
   props.onDelete(props.todo, props.done);
  }
  
  return (
    <div className="flex items-center mt-4">
      <CheckBox checked={props.done} onChange={onCheckBoxChange}/>
      <span className={"flex ml-2 font-medium text-gray-700 text-sm " + (props.done && 'line-through')}>{props.todo.title}<HiTrash onClick={onDelete}/></span>
    </div>  
  );
}

export default TodoRow;