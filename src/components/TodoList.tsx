import React from "react";

export interface TodoListProps {
    todoList: Array<string>
}

export const TodoList = (props: TodoListProps)  => (
    <ul>
        { props.todoList.map(item => (<li>{item}</li>)) }
    </ul>
)
