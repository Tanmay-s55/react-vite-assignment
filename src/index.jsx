import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import SecondPage from './SecondPage';

const elm = document.getElementById('root');
const root = ReactDOM.createRoot(elm);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: 'secondpage',
        element: <SecondPage />
    }
]);

root.render(
    <div>
        <RouterProvider router={router} />
    </div>
);