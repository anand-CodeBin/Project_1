import {useLocation} from 'react-router-dom'
import { useContext } from 'react';
import { loginContext } from '../../Contexts/LoginContext';
import { useNavigate } from 'react-router-dom'
const Header = () => {

    let location = useLocation();
    const auth = useContext(loginContext);
    const goTo = useNavigate();

    // console.log(location)

    let heading = location.pathname.replace('/','').toUpperCase();
    if(location.pathname === '/'){
        heading = 'Home'
    }

    function handleOnClick(){
        if(auth.state){
            auth.signout();
        }else{
            goTo('/login')
        }

        
    }


    return(
        <>
            <div>
                <header>
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-center" style={{textAlign:"center"}}>
                        <h1 style={{color : "white", textAlign: "center"}}>{heading}</h1>
                    </div>
                    {location.pathname === '/login' ? '' : <button onClick={handleOnClick}>{auth.state ? 'Log Out' : 'Log In'}</button>}
                </div>
                </header>
            </div>
        </>
    )

}

export default Header;