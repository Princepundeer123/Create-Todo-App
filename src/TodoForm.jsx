import React from 'react';
import Card from './Card';
import H3 from './H3';
import Input from './Input';
import Button from './Button';

const TodoForm = (props) => {

  const [inputValue, setInputValue] = React.useState('');

  const onInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const saveTodo = () => {
    props.onCreate(inputValue);
    setInputValue('');
    props.onClose();
  }
   
  return (
    <form>
  <Card>
    <H3>Create a todo</H3>
    <div className="mt-4 w-80 mb-4">
     <Input value={inputValue} onChange={onInputValue} placeholder="Write an article about XState"/>
    </div>
  <div className="space-x-4">
    <Button disabled={!inputValue} onClick={saveTodo}>save</Button>
     <Button onClick={props.onClose} theme='secondary'>cancel</Button>
    </div>
  </Card>
  </form>
  );
}

export default TodoForm;