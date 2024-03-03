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
                path: '/:username',
                element: <UserPage />,
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
