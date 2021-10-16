module.exports = function dbMiddleware(req, res, next) {
  req.db = require('../db')
  return next()
}