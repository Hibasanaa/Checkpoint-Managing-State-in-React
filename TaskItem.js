import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.name} - {task.description}</span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
    </li>
  );
};

export default TaskItem;
