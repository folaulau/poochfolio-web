import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/fonts.css';
import { store } from './ui/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { App } from './ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer closeButton={true} hideProgressBar={true} position="top-right" transition={Slide} autoClose={3000} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
