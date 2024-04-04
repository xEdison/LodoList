import React from 'react';
import { ItemTask } from './ItemTask';

export const Tasks = ({ tasks, taskCompleted }) => {
    
  return (
    <div className="container">
      <ul>
        {tasks.map(task => (
          <ItemTask key={task.id} task={task} taskCompleted={taskCompleted} />
        ))}
      </ul>
    </div>
  );
};
