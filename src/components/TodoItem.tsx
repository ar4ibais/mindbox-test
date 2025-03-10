import React from "react";
import { Todo } from "../App";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <div>
            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
