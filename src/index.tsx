import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'reset-css';
import './styles/index.scss';
import Home from './pages/Home';
import Popular from './pages/Popular';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/popular',
        element: <Popular />,
    },
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);

document.getElementById('root');
