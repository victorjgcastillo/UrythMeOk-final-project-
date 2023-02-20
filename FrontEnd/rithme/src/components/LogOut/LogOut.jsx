import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from '../../shared/contexts/JwtContext';


export default function LogOut(){
    const { setJwt } = useContext(JwtContext);
    const Navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        setJwt(null);
        Navigate("/");
    }    

    return (
        <button className="log-out" onClick={logOut} >Log Out</button>
    )
}