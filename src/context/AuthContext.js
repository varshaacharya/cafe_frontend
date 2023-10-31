import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationStore from "../utils/localStorageUtil";

export const AuthContext = createContext({
     user:null,
     login:(user)=>{},
     logout:()=>{}
});

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [user_type, setUserType] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [user_email,setUser_email]=useState('');  
    const navigate = useNavigate();

    const Login = userData => { 
        setUserType(userData.user_type); 
        setUser_email(userData.user_email);       
        ApplicationStore().setStorage('token',userData.userToken);
        ApplicationStore().setStorage('user_type',userData.user_type);
        ApplicationStore().setStorage('user_email',userData.user_email);
        setLoggedIn(true);
    }

    const Logout = () => {
        const data = {user_email:user}; 
        console.log("loggd out");
        ApplicationStore().removeStorage('token');
        ApplicationStore().removeStorage('user_type');
        ApplicationStore().removeStorage('user_email');
        setUser(null);
        setLoggedIn(false);
        navigate("/Login");
    }

    return  (
        <AuthContext.Provider value={{ user, Login, user_type, loggedIn, Logout,user_email }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export function useAuthContext(){
    const {user, Login, user_type, loggedIn, Logout,user_email} =  useContext(AuthContext);
    return {user, Login, user_type, loggedIn, Logout,user_email};
}










