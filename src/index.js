<<<<<<< HEAD
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { store } from './Store'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
=======
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { store } from './Store'
import { Provider } from 'react-redux'


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
