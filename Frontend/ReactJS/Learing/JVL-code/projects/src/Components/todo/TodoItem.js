import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
    </li>
  );
}

export default TodoItem;
