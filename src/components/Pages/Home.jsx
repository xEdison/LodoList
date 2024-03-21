import React, { useState, useEffect } from 'react';
import { Header } from '../Layouts/Header/Header';
import { Main } from '../Layouts/Main/Main';
import { Footer } from '../Layouts/Footer/Footer';
import { Tasks } from '../Tasks/Tasks';
import react from '../../assets/React.png'
import { Filter } from '../Filter/Filter';

const Home = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filterOption, setFilterOption] = useState('todas');



  const createTask = () => {
    const titleInput = document.getElementById('titleInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;
    const newTask = { id: tasks.length + 1, title: titleInput, description: descriptionInput, completed: false };
    setTasks([...tasks, newTask]);
    document.getElementById('titleInput').value = '';
    document.getElementById('descriptionInput').value = '';
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = () => {
    let pendingTasks = tasks.filter(task => !task.completed);
    let completedTasks = tasks.filter(task => task.completed);
    
    switch (filterOption) {
      case 'pendientes':
        return pendingTasks;
      case 'resueltas':
        return completedTasks;
      default:
        return tasks;
    }
  };    

  return (
    <>
      <Header>
        <h1 className='title'>Lista de Tareas</h1>
        <img className='React' src={react} alt="React" />
      </Header>
      <Main>
        <div className="tasks">
          <div className='Title-Tasks'>
            <label >Titulo de la Tarea:</label>
            <input className='input' id="titleInput" type="text" placeholder="Ingrese título de tarea aquí" />
          </div>
          <div className='description-Tasks'>
            <label>Descripcion de la Tarea:</label>
            <input className='input' id="descriptionInput" type="text" placeholder="Ingrese descripción de tarea aquí" />
          </div>
          <div className="button">
            <button type="button" onClick={createTask}>Crear tarea</button>
          </div>
          
        </div>
        <p className='Result'>Usted tiene {filteredTasks().filter(task => !task.completed).length} tareas pendientes y {filteredTasks().filter(task => task.completed).length} resueltas</p>
        <hr />
        <Filter filterOption={filterOption} setFilterOption={setFilterOption} />
        <Tasks tasks={filteredTasks()} toggleCompleted={toggleCompleted} />
        {filteredTasks().length === 0 && <p>No hay tareas pendientes.</p>}
      </Main>
      <Footer>
        <h1 className='Titlee'>Edison AA</h1>
      </Footer>
    </>
  );
};

export default Home;
