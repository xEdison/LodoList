
import React from 'react'

export const ItemTask = ({ task, taskCompleted }) => {
  return (
    <li className={task.completed ? 'completed' : ''} onClick={() => taskCompleted(task.id)}>
      <div className={`circle ${task.completed ? 'completed-green' : 'uncompleted-red'}`} />
      <label>{task.titleInput}: {task.descriptionInput}</label>
      <input type="checkbox" checked={task.completed} readOnly />
    </li>
  )
}
