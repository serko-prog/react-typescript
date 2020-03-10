import React, {useState} from "react";

export interface ITodoFormProps {
    onAddTodo?: (title: string) => void,
  }

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
    let [title, setTitle] = useState<string>("");

    const titleChangeHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
    const onSubmit = () =>
    {
        if (props.onAddTodo && title) {
            props.onAddTodo(title);
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