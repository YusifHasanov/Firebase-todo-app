import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css"


import {extendedTodoSlice} from "./features/todos/todosSlice";


const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(extendedTodoSlice.endpoints.getTodos.initiate())

root.render(

   <Provider store={store}>
       <App/>
   </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
