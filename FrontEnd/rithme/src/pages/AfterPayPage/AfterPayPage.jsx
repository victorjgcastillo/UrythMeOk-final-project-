import React from 'react';
import './AfterPayPage.scss';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const AfterPayPage = () => {
  const myUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='after-pay-page'>
      <div className='header-cont'>

      </div>
      <div className='main'>
        <div className='compra'>
          <h1>¡Genial {myUser.name}!</h1>
          <div className='compra-parrafo'>
            <p>Que disfrutes del concierto.</p> 
            <p>RYTHME te ha enviado un correo</p>
            <p>con tu entrada y comprobante.</p>
            <p>¿Quieres además </p>
            <p>incluir el evento en tu calendario?</p>
          </div>
          <div>
            <Link to={'/my-concerts/'} style={{ textDecoration: 'none' }}>
            {/* <Link to={'/my-concerts/'+myUser._id} style={{ textDecoration: 'none' }}> */}
              <button className='compra-button' >Quiero incluirlo ahora</button>
            </Link>
          </div>
          <Link to='/' style={{ textDecoration: 'none' }}>Mas tarde</Link>
        </div>
      </div>
      <div className='footer'>
        <Navbar/>
      </div>
    </div>
  )
}

export default AfterPayPage;