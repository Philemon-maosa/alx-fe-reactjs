import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          {todo.text}
          <button onClick={(e) => { 
            e.stopPropagation(); 
            deleteTodo(todo.id); 
          }}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
