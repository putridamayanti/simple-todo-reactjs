import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Todo from "./todo";

var dest    = document.getElementById('root');

ReactDOM.render(
    <div>
        <Todo/>
    </div>, dest);
registerServiceWorker();
