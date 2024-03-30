import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'reset-css';
import './styles/index.scss';
import Home from './pages/Home';
import Popular from './pages/Popular';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainPages from './pages/MainPages';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPages />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/popular',
        element: <Popular />,
      },
      {
        path: '/users/:id',
        element: <UserPage />,
      },
      {
        path: '/home/:id',
        element: <PostPage />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

document.getElementById('root');
