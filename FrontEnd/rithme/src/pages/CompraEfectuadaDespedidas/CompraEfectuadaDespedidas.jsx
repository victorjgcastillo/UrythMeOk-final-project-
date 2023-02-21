import React, { useEffect, useState } from 'react';
import './CompraEfectuadaDespedidas.scss';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CompraEfectuadaDespedidas = () => {

 
  const [user, setUser] = useState([]);
 // let localStorage = useLocation();
 // const user = localStorage.getItem('name')
 // console.log(user);
 useEffect(() => {
    axios('http://localhost:5000/users/')
    .then(res => {
         const user = res.data[0];
         console.log(user)
        setUser(user);
    })
}, [])

  return (
    <div className='compra'>
      <h1>¡Genial {user.name}!</h1>

        <div className='compra-parrafo'>
      <p>Que disfrutes del concierto.</p> 
      <p>RYTHME te ha enviado un correo</p>
      <p>con tu entrada y comprobante.</p>
      <p>¿Quieres además </p>
      <p>incluir el evento en tu calendario?</p>
      </div>
    <div>
      <button className='compra-button' onClick={() => alert('Quiero incluirlo ahora')}>Quiero incluirlo ahora</button>
      </div>
      <a href="https://www.example.com">Mas tarde</a>
    </div>
  )
}

export default CompraEfectuadaDespedidas