
import React from 'react'

export const ItemTask = ({ task, toggleCompleted }) => {
  return (
    <li className={task.completed ? 'completed' : ''} onClick={() => toggleCompleted(task.id)}>
      <div className={`circle ${task.completed ? 'completed-blue' : 'uncompleted-red'}`} />
      <label>{task.title}: {task.description}</label>
      <input type="checkbox" checked={task.completed} readOnly />
    </li>
  )
}
