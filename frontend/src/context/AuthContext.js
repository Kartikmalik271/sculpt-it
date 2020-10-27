import React,{createContext,useState,useEffect} from 'react';
import Auth from '../utils/Auth';
    //context api { provides global state as re-render refreshes the previos state}

export const AuthContext= createContext();

export default({children})=>{
    const [user,setUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        Auth.isAuthenticated().then(data=>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    return(
        <div>
            {!isLoaded ?<h1>Loading..</h1> : 
                <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                    { children }
                </AuthContext.Provider> 
            }
        </div>
    )


}