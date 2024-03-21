import React from 'react';

export const Filter = ({ filterOption, setFilterOption }) => {
  return (
    <div className="options">
      <label htmlFor="options">Filtrar:</label>
      <select id="options" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
        <option value="todas">Todas las tareas</option>
        <option value="pendientes">Pendientes</option>
        <option value="resueltas">Resueltas</option>
      </select>
    </div>
  );
};
