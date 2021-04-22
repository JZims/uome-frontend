import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css'



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

