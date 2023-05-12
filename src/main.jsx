import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Error from './pages/error';
import Tasks from './pages/tasks/tasks';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
