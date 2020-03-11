import React, {useState, useEffect} from "react";
import {ITodo} from '../infrastructure/interfaces';
import {TodoForm, ITodoFormProps} from '../components/TodoForm';
import {TodoList, ITodoListProps} from '../components/TodoList';

export const TodosPage: React.FC = () => {
    const localStorageKey = "todos";
    const [todoList, setTodoList] = useState<ITodo[]>([]);
  
    useEffect(() => {
      const saved: string | null = localStorage.getItem(localStorageKey);
      if (saved)
      {
        const parsed: ITodo[] = JSON.parse(saved);
        setTodoList(parsed);
      }
    }, []);
  
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todoList));
    }, [todoList]);
  
  
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
        <TodoForm {...todoformProps}/>
        <TodoList {...todoListProps}/>
    </>);
}