// Middleware de autenticación: bloquea la request si no hay sesión de usuario.
module.exports = function requireAuth(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).json({ message: 'No autorizado' });
};
