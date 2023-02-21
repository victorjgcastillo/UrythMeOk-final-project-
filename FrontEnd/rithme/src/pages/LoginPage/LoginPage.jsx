import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import LoginForm from '../../components/LoginForm/LoginForm';
import Navbar from '../../components/Navbar/Navbar';
import './LoginPage.scss';

export default function LoginPage() {
    
    const navigate = useNavigate();    
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
        if(user){
            navigate("/profile");
        }
    },[])

    return (
        <div className='loginPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Login'}/>
            </div>
            <div className='main'>
                <LoginForm className='main__container'/>
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    );
}
