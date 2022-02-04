import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {CarsContextProvider} from './context/cars.context'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CarsContextProvider>
      <App />
    </CarsContextProvider>
  </React.StrictMode>,
  document.getElementById('swipoo')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
