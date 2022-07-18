import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const middleware = () => {
  let middleware = [];

  if (import.meta.env.DEV) {
    middleware.push(logger);
  }

  return middleware;
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware()
})


export type AppDispatch = typeof store.dispatch

export default store