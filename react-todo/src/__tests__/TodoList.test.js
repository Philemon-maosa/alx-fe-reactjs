import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

// Mock todos
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Testing", completed: true },
];

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList initialTodos={initialTodos} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList initialTodos={initialTodos} />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn AWS" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn AWS")).toBeInTheDocument();
  });

  test("toggles a todo's completed state", () => {
    render(<TodoList initialTodos={initialTodos} />);

    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).not.toHaveClass("completed");

    // Toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed");

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList initialTodos={initialTodos} />);

    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
