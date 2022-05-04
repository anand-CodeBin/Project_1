import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Container from './components/pages/Posts/Post.container';
import LogInContextProvider , {loginContext} from './Contexts/LoginContext';
import Upload from './components/pages/Upload/Upload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LogInContextProvider childer={
                  <Routes>
                  
                  <Route path='/' element={<App/>}>
                    <Route path='login' element={ <Login />}/>
                    <Route path='posts' element={ <Container />}/>
                    <Route path='upload' element={<Upload />}/>     
                  </Route>

                  </Routes>
        }>
        </LogInContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
