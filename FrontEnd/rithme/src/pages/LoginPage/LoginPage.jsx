import React from 'react';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

export default function LoginPage() {
    
      return (
        <div className='loginPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Login'}/>
            </div>
            <div className='main'>
                <LoginForm className='main__container'/>
            </div>
            <div className='footer'>
                Aqui estara el nav
            </div>
        </div>
      );
}
