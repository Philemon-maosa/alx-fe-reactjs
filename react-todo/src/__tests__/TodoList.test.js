// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

// Mock data
const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build Todo App", completed: true },
];

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={() => {}} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("calls toggleTodo when a todo is clicked", () => {
    const mockToggle = vi.fn();
    render(<TodoList todos={todos} toggleTodo={mockToggle} deleteTodo={() => {}} />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  test("calls deleteTodo when delete button is clicked", () => {
    const mockDelete = vi.fn();
    render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={mockDelete} />);
    const deleteButton = screen.getAllByText("❌")[0];
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
