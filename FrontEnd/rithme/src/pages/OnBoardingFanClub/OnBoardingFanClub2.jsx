import React from 'react';
import './OnBoardingFanClub2.scss';
import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";


const OnBoardingFanClub2 = () => {

 


  return (
    
    <div className='onboarding'>
      <div className='onboarding--header'>
     <HeaderAndBack back_url={'/'} name={'Fan Club'}/>
     </div>
      <h2 className='onboarding-title'>RITHME FAN CLUB  </h2>

        <div className='onboarding--parrafo'>
      <p>es un servicio de suscripción mensual que te mantendra informado de toda la actividad musical que te interesa y te ofrecerá experiencias, entradas y otras ventajas especiales</p> 
      <p>Transparente </p>
      <p>Fiable</p>
      <p>Y cómodo </p>

      </div>
    <div>
      <button className='on-boarding--button' onClick={() => alert('Quiero registrarme ahora')}>Quiero registrarme ahora</button>
      </div>
      <a href="https://www.example.com">Mas tarde</a>
    
    <p>AQUI VA EL NAVBAR</p>
    </div>
  )
}

export default OnBoardingFanClub2;