import React, {useState} from "react";

export interface TodoFormProps {
    onAddTodo?: (title: string) => void,
    children?: React.ReactNode
  }

export const TodoForm: React.FC = (props: TodoFormProps) => {
    let [title, setTitle] = useState<string>("");

    const titleChangeHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
    const onSubmit = () =>
    {
        if (title) {
            props.onAddTodo && props.onAddTodo(title);
            setTitle("");
        }
    }

    const titleKeyPressHandler: React.KeyboardEventHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            onSubmit();
        }
    }

    return (
    <form>
        <div className="input-field">
            <input type="text" id="title" value = {title} onChange={titleChangeHandler} onKeyPress={titleKeyPressHandler}/>
            <label htmlFor="title" className="active">Todo Title:</label>
        </div>
    </form>
    )
}