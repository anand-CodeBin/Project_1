import { useState,  useContext, useEffect } from "react";
import { loginContext } from "../../../Contexts/LoginContext";
import {useNavigate , Navigate} from 'react-router-dom';
import { useJwt } from 'react-jwt'
import axios from "axios";



const Login = () => {
    const auth = useContext(loginContext);
    const JWToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNTE2MjM5MDIyfQ.XfVmDYjRSB7OIYdfD06jE88eleoU92i2tKtGC0j8Rpw';
    const {decodedToken,isExpired} = useJwt(JWToken);

    // console.log(decodedToken , isExpired)

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');


    async function updateLastLogin(){
        const lastLogin = await axios.get('http://localhost:5000/users/1');
        // console.log('lastLogin',lastLogin.data.last_Login);
        auth.updateLastLogin(lastLogin.data.last_Login);
        axios.put('http://localhost:5000/users/1',{
            name: "123",
            pass: "123",
            last_Login: +new Date()
        })
    }
    
    
    function handleSubmit(e){

        e.preventDefault();
        if(username.length > 0 && password.length > 0 ){
            if(!auth.state){
                if(decodedToken.username === username && decodedToken.password === password){
                    auth.signin()
                    updateLastLogin();
                    localStorage.setItem('JWTToken',JWToken)
                }
                
            }
            else{auth.signout()}
            console.log('Logging in.')
        }
    }
        


    useEffect(()=>{
        if(decodedToken) {
            if(localStorage.getItem('JWTToken') !== null && localStorage.getItem('JWTToken') === JWToken){
                auth.setUsername(decodedToken.username);
                auth.signin();   

                updateLastLogin();
            }
        }    
    }
    ,[decodedToken]) 

    return (
        <div>
            {auth.state ? <Navigate to='/posts'/> : ''}
            <br/>
            <br/>
            <input id="username" placeholder="Username" type="text" onChange={(e)=>{ setUsername(e.target.value.trim()) }}></input>
            <br/>
            <br/>
            <input id="password" placeholder="Password" type="text" onChange={(e)=>{ setPassword(e.target.value.trim()) }}></input>
            <br/>
            <br/>
            <button type="button" onClick={handleSubmit}>Log In</button>
        </div>
    )
}

export default Login;