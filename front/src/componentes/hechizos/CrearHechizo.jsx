import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const CrearHechizo = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nivel, setNivel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoHechizo = { nombre, descripcion, nivel: Number(nivel) };
      await api.post('/hechizos', nuevoHechizo);
      navigate('/hechizos');
    } catch (error) {
      console.error('Error al crear el hechizo:', error);
    }
  };

  return (
    <div className="crear-hechizo">
      <h2>Crear Hechizo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nivel">Nivel</label>
          <input
            type="number"
            id="nivel"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearHechizo;
