import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './utils/router';
import { Provider } from 'react-redux';
import store from './auth/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster
    position="top-center"
    reverseOrder={false}
    />
    <Provider store={store}>
<RouterProvider router={router} >

</RouterProvider>
</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
