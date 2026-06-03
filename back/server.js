const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); 
const hechizosRoutes = require('./routes/hechizoRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config(); 
const app = express();

// Middleware
// CORS con credentials: necesario para que el navegador envíe la cookie de sesión.
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:10000',
  credentials: true,
}));
app.use(express.json());

// Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-only-secret-cambiar-en-produccion',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
}));


// Rutas
app.use('/api/hechizos', hechizosRoutes);
app.use('/api/users', userRoutes);


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
