import React from 'react';
import Header from './Header';
import Button from './Button';
import H1 from './H1';
import H3 from './H3';
import TodoForm from './TodoForm';
import Container from './Container';
import TodoRow from './TodoRow';

let i = 0;

function TodoPage() {
  const [todoFornVisible, setTodoFormVisiblity] = React.useState(false);

  const savedTodoList = JSON.parse(localStorage.getItem('todolist') || "[]") || [];

  const [todoList, setTodoList] = React.useState(savedTodoList);

  const updateTodoList = (todoList) => {
    setTodoList(todoList);

    localStorage.setItem('todolist', JSON.stringify(todoList));
  }

  const completeTodoList = todoList.filter(t => t.done);
  const incompleteTodoList = todoList.filter(t => !t.done);

  const showTodoForm = () => setTodoFormVisiblity(true);
  const hideTodoForm = () => setTodoFormVisiblity(false);

  const AddTodo = (todoTitle) => {
      updateTodoList([...todoList, {id: i++, title: todoTitle, done: false}]);
  }; 
  
   const onTodoDelete = (todo) => {
      const newTodoList = todoList.filter(t => t.id !== todo.id);
     updateTodoList(newTodoList);
  }

  const markAsDone  = (todo) => {
      todo.done = true;

    updateTodoList([...todoList]);
  };

  const markAsNotDone = (todo) => {
      todo.done = false;

    updateTodoList([...todoList]);
  };
  
  return (
   <>
      <Header></Header>
     <Container>
      <H1>Things to get done</H1>
       <div className="mb-4">
      <H3>Things to do</H3>
       </div>

       {!incompleteTodoList.length && <div>No todos here!</div>}
       
       {incompleteTodoList.map(t => <TodoRow todo={t} onStatusChange={markAsDone} done={false} key={t.id} onDelete={onTodoDelete}></TodoRow>)}

       <div className="mt-4 mb-4">
       {!todoFornVisible && <Button onClick={showTodoForm} theme='highlight' icon='+'>Add a todo</Button>}
       </div>  
       
       {todoFornVisible && <TodoForm onClose={hideTodoForm} onCreate={AddTodo}></TodoForm>}

       <div className="mb-4">
       <H3>Things done</H3>
       </div>

       {completeTodoList.map(t => <TodoRow todo={t} onStatusChange={markAsNotDone} done={true} key={t.id} onDelete={onTodoDelete}></TodoRow>)}

       {!completeTodoList.length && <div>No todos here!</div>}
       
    </Container>
   </>
  );
}

export default TodoPage;