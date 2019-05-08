// Simple Middleware example -- conditional  Middlewares
export const loggerMiddleware = store => next => action => {
  console.log('Dispatching', action)
  next(action)
}
