import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import  Store  from './Redux/Store/Store';
import App from './App';
import './index.css';
import {fetchTasks} from './Redux/Actions/Actions'
import {fetchUsers} from './Redux/Actions/Actions'

Store.dispatch(fetchTasks())
Store.dispatch(fetchUsers())

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);


