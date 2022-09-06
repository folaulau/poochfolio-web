import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './globals.css';
import './styleguide.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PoochRoutes from './routes';
import { BackdropProvider } from './context/BackDropProvider';

console.log('node env: ' + process.env.REACT_APP_ENV);
console.log('api x-api-key: ' + process.env.REACT_APP_X_API_KEY);

ReactDOM.render(
  <React.StrictMode>
  <Suspense>
    <BackdropProvider>
      <BrowserRouter>
        <PoochRoutes />
      </BrowserRouter>
    </BackdropProvider>
  </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
