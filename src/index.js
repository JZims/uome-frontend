import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { BrowserRouter } from "react-router-dom"



ReactDOM.render(  
<BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);

