import React, {useState} from 'react';
import {TodoListModel} from './api/TodoListModel';
import {Navbar} from './components/Navbar';
import {TodoForm, TodoFormProps} from './components/TodoForm';
import {TodoList, TodoListProps} from './components/TodoList';

const App: React.FC = () => {
  const initialTodoList: TodoListModel[] = [];
  let todoList: TodoListModel[];
  let setTodoList: (list: TodoListModel[]) => void;
  [todoList, setTodoList] = useState(initialTodoList);

  const addTodo: (title: string) => void = (title) => { 
    const timestamp: number = Date.now();
    const newTodo: TodoListModel = {id: timestamp, title, done: false};

    let newTodoList = todoList.slice(0);
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const deleteTodo: (id: number) => void = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  const doneTodo: (id: number, value: boolean) => void = (id, value) => {
    const newTodoList: TodoListModel[] = [...todoList];
    newTodoList.forEach((item) => {if (item.id === id) item.done = value});
    setTodoList(newTodoList);
  }

  const todoformProps: TodoFormProps = {onAddTodo: addTodo};
  const todoListProps: TodoListProps = {todoList, onDeleteTodo: deleteTodo, onDoneTodo: doneTodo};

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
