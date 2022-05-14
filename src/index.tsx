import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import './index.css';
import App from './App';
import userReducer from './slices/userSlice'
import './firebase.js'

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
