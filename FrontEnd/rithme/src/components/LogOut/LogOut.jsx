import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from '../../shared/contexts/JwtContext';
import './LogOut.scss';

export default function LogOut(){
    const { setJwt } = useContext(JwtContext);
    const Navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        Navigate("/");
    }    

    return (
        <button className="log-out" onClick={logOut} >Log Out</button>
    )
}