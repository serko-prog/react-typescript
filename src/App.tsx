import React, {useState} from 'react';
import {ITodo} from './infrastructure/interfaces';
import {Navbar} from './components/Navbar';
import {TodoForm, ITodoFormProps} from './components/TodoForm';
import {TodoList, ITodoListProps} from './components/TodoList';

const App: React.FC = () => {
  let [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo: (title: string) => void = (title) => { 
    const newTodo: ITodo = {
      id: Date.now(), 
      title, 
      done: false};

      setTodoList(prev => [...prev, newTodo]);
  }

  const deleteTodo: (id: number) => void = (id) => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  }

  const doneTodo: (id: number, value: boolean) => void = (id, value) => {
    setTodoList(prev => prev.map(item => ({
      id: item.id, 
      title: item.title, 
      done: item.id === id ? value : item.done
    })));
  }

  const todoformProps: ITodoFormProps = {onAddTodo: addTodo};
  const todoListProps: ITodoListProps = {todoList, onDeleteTodo: deleteTodo, onDoneTodo: doneTodo};

  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm {...todoformProps}/>
        <TodoList {...todoListProps}/>
      </div>
    </>
  );
}

export default App;
