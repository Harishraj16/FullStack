import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './form';
import JokeMain from './Components/Jokes/Main';
import Password from './Components/PasswordValidator/Password';
import IpFinder from './Components/IpFinder/IpFinder';
import Car from './Components/Car/Car';
import Apple from './Components/Car/Apple';
import TodoList from './Components/todo/TodoList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Car/> */}
    {/* <TodoList/> */}
    {/* <Form/> */}
    {/* <JokeMain/> */}
    {/* <Password/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
