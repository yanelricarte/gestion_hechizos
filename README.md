# 🧙 Gestión de Hechizos

Aplicación web full-stack para la gestión de hechizos. Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre una colección de hechizos, con frontend en React y backend en Node.js + Express sobre MongoDB.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Tecnologías

- **Frontend:** React, React Router, Vite, CSS
- **Backend:** Node.js, Express
- **Base de datos:** MongoDB, Mongoose

## Estructura del proyecto

```
.
├── back/    # API REST (Node + Express + Mongoose)
└── front/   # Cliente (React + Vite)
```

## Requisitos previos

- Node.js 18 o superior
- Una instancia de MongoDB (local o en la nube)

## Instalación y uso

### Backend

```bash
cd back
npm install
```

Creá un archivo `.env` en `back/` con la cadena de conexión a tu base de datos:

```env
MONGODB_URI=mongodb://localhost:27017/gestion-hechizos
```

Iniciá el servidor:

```bash
npm start
```

### Frontend

```bash
cd front
npm install
npm run dev
```

## Funcionalidades

- **Lista de hechizos:** visualiza todos los hechizos disponibles.
- **Detalle:** consulta la información de un hechizo específico.
- **Crear:** añade un nuevo hechizo.
- **Editar:** modifica un hechizo existente.
- **Eliminar:** quita un hechizo de la base de datos.

## Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/hechizos` | Lista todos los hechizos |
| `GET` | `/api/hechizos/:id` | Obtiene un hechizo por ID |
| `POST` | `/api/hechizos` | Crea un nuevo hechizo |
| `PUT` | `/api/hechizos/:id` | Actualiza un hechizo por ID |
| `DELETE` | `/api/hechizos/:id` | Elimina un hechizo por ID |

## Licencia

Distribuido bajo licencia MIT. Ver [`LICENSE`](LICENSE).
