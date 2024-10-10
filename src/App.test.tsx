import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("should add a new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a new task/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText(/new task/i)).toBeInTheDocument();
});

test("should toggle todo completion", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a new task/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Task to complete" } });
    fireEvent.click(button);

    const completeButtons = screen.getAllByText(/complete/i);
    fireEvent.click(completeButtons[0]);

    expect(screen.getByText(/undo/i)).toBeInTheDocument();
});
