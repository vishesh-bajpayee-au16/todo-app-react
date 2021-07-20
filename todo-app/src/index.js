import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

// import bootstrap css file that we have downloaded from the package to add styles to reactstrap
import 'bootstrap/dist/css/bootstrap.min.css'





ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>,document.getElementById("root"))