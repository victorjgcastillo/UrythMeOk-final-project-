import React from 'react';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss';

export default function RegisterPage() {
    
      return (
        <div className='registerPage'>
            <div className='header'>
                <HeaderAndBack back_url={'/'} name={'Register'}/>
            </div>
            <div className='main'>
                <RegisterForm className='main__container'/>
            </div>
            <div className='footer'>
                Aqui estara el nav
            </div>
        </div>
      );
}
