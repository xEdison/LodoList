import React from 'react';
import { ItemTask } from './ItemTask';

export const Tasks = ({ tasks, toggleCompleted }) => {
    
  return (
    <div className="container">
      <ul>
        {tasks.map(task => (
          <ItemTask key={task.id} task={task} toggleCompleted={toggleCompleted} />
        ))}
      </ul>
    </div>
  );
};
