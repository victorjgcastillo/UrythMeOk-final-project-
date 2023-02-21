import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss';

export default function RegisterPage() {

    const navigate = useNavigate();    
    const user = JSON.parse(localStorage.getItem('user'));
    

    useEffect(()=>{
        if(user){
            navigate("/profile");
        }
    },[])

    return (
        <div className='registerPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/login'} name={'Register'}/>
            </div>
            <div className='main'>
                <RegisterForm className='main__container'/>
            </div>
            <div className='footer'>
                <Navbar/>
            </div>
        </div>
    );
}
