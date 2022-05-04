import {useLocation} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { loginContext } from '../../../Contexts/LoginContext'; 
import { useNavigate, NavLink } from 'react-router-dom'

const Home = () => {

    let location = useLocation();
    const auth = useContext(loginContext);
    let goTo = useNavigate;

    // if(!auth.state) return null

    return(
        <>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/Upload'>Upload</NavLink>
        </>
    )


}

export default Home;