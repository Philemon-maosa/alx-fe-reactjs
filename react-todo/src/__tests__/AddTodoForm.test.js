import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm Component", () => {
  test("adds a new todo on form submit", () => {
    const mockAddTodo = vi.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText("Add a new task...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("New Task");
  });
});
