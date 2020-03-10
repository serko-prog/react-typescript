import React, {useState} from 'react';
import {Navbar} from './components/Navbar';
import {TodoForm, TodoFormProps} from './components/TodoForm';
import {TodoList, TodoListProps} from './components/TodoList';

const App: React.FC = () => {
  let initialTodoList: Array<string> = [];
  let todoList: Array<string>;
  let setTodoList: (list: Array<string>) => void;
  [todoList, setTodoList] = useState(initialTodoList);

  const addTodo: (title: string) => void = (title) => { 
    let newTodoList = todoList.slice(0);
    newTodoList.push(title);
    setTodoList(newTodoList);
    console.log(newTodoList);
  }
  const onSubmit: (title: string) => void = (title) => addTodo(title);
  const todoformProps: TodoFormProps = {onSubmit};
  const todoListProps: TodoListProps = {todoList};

  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm {...todoformProps}/>
      </div>
      <div className="container">
        <TodoList {...todoListProps}/>
      </div>
    </>
  );
}

export default App;
