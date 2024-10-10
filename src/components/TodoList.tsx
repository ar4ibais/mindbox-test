import React from "react";
import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    deleteTodo,
}) => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div>
            <h2>All Tasks</h2>
            {todos.length === 0 && <p>No tasks available</p>}
            <h3>Active Tasks</h3>
            {activeTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}

            <h3>Completed Tasks</h3>
            {completedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
