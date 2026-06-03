import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import './hechizos.css';

const EditarHechizo = () => {
  const { id } = useParams();
  const [hechizo, setHechizo] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nivel, setNivel] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHechizo = async () => {
      try {
        const { data } = await api.get(`/hechizos/${id}`);
        setHechizo(data);
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setNivel(data.nivel);
      } catch (error) {
        console.error('Error al obtener hechizo:', error);
      }
    };

    fetchHechizo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/hechizos/${id}`, { nombre, descripcion, nivel: Number(nivel) });
      navigate('/hechizos');
    } catch (error) {
      console.error('Error al actualizar hechizo:', error);
    }
  };

  if (!hechizo) return <p>Cargando...</p>;

  return (
    <div className="formulario-hechizo">
      <h2>Editar Hechizo</h2>
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
        <input type="submit" value="Actualizar Hechizo" />
      </form>
    </div>
  );
};

export default EditarHechizo;
