import logo from './logo.svg';
import './css/App.css';
import './css/bootstrap.min.css'
import Container from './components/pages/Posts/Post.container';
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header.component';
import { useContext } from 'react';
import { loginContext } from './Contexts/LoginContext';
import Home from './components/pages/Home/Home';
import {useNavigate} from 'react-router-dom'

function App() {

  const auth = useContext(loginContext);
  const goTo = useNavigate()
  return (
    <div className="App">

      <Header />
      <Home/>
      
      <Outlet/>
    </div>
  );
}

export default App;
