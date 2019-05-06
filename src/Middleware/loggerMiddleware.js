// Simple Middleware example -- conditional  Middlewares
export const loggerMiddleware = store => next => action => {
  // if (action.type === ADD_TODO) {
  console.log('Dispatching', action)
  next(action)
  // }
  // else {
  // 	next(action);
  // }
}
