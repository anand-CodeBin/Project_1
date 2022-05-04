import React, { createContext, useState } from "react";


export const loginContext = createContext(false);


const LogInContextProvider = ({childer}) => {
    const [state , setState] = useState(false);
    const [user , setuser] = useState('');
    const [lastLogin, setLastLogin] = useState(0);
    
    let signin = () => {
        setState(true);
    }

    let signout = () => {
        setState(false);
    }

    let setUsername = (name) => {
        setuser(name)
    }

    let updateLastLogin = (time) => {
        setLastLogin(time)
    }

    let value = {state, user, lastLogin , signin, signout, setUsername, updateLastLogin}
    return <loginContext.Provider value={value}>{childer}</loginContext.Provider>
}



export default LogInContextProvider;

