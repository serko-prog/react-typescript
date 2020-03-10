import React from "react";
import {TodoListModel} from "../api/TodoListModel";

export interface TodoListProps {
    todoList: TodoListModel[],
    onDeleteTodo: (id: number) => void,
    onDoneTodo: (id: number, value: boolean) => void
}


export const TodoList = (props: TodoListProps)  => {

    const onChangeTodoDone : React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const id: number = +event.target.id.slice(2);
        const done: boolean = !!event.target.checked;
        props.onDoneTodo(id, done);
    }
   
    const onDeleteTodo : React.MouseEventHandler = (event: React.MouseEvent<HTMLInputElement>): void => {
        event.preventDefault();
        event.stopPropagation();
        const id: number = +event.currentTarget.id.slice(1);
        props.onDeleteTodo(id);
    }

    return (<ul>
        { 
        props.todoList.map(item => (
            <li key = {item.id.toString()} >
                <label>
                    <input id={"cb" + item.id} type="checkbox" checked={item.done} onChange={onChangeTodoDone}/>
                    <span>{item.title}</span>
                    <i  id={"i" + item.id} className="material-icons red-text" onClick={onDeleteTodo}>delete</i>
                </label>
            </li>)) 
        }
    </ul>)
}

