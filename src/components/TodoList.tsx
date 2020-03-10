import React from "react";
import {ITodo} from "../infrastructure/interfaces";

export interface ITodoListProps {
    todoList: ITodo[],
    onDeleteTodo: (id: number) => void,
    onDoneTodo: (id: number, value: boolean) => void
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
    if (props.todoList.length === 0) return <p className="center">No todos</p>
    return (
        <ul>
            {
            props.todoList.map(item => 
                <li className="todo" key = {item.id} >
                    <label>
                        <input type="checkbox" checked={item.done} onChange={() => props.onDoneTodo && props.onDoneTodo(item.id, !item.done)}/>
                        <span>{item.title}</span>
                        <i className="material-icons red-text" onClick={() => props.onDeleteTodo && props.onDeleteTodo(item.id)}>delete</i>
                    </label>
                </li>) 
            }
        </ul>
        )
}