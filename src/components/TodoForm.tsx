import React, { useState } from "react";

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
