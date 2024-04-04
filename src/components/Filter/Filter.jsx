import React from 'react';

export const Filter = ({ filterOption, setFilterOption }) => {
  return (
    <div className="options">
      <label className="options">Filtrar:</label>
      <select id="options" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
        <option value="all">Todas las tareas</option>
        <option value="earrings">Pendientes</option>  
        <option value="resolved">Resueltas</option>
      </select>
    </div>
  );
};
