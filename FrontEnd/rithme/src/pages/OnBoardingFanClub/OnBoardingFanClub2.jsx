import React from 'react';
import './OnBoardingFanClub2.scss';
import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";
import { Link } from 'react-router-dom';


const OnBoardingFanClub2 = () => {

 


  return (
    
    <div className='onboarding'>
      <div className='onboarding--header'>
     <HeaderAndBack back_url={'/'} name={'Fan Club'}/>
     </div>
      <h2 className='onboarding-title'>RITHME FAN CLUB  </h2>

        <div className='onboarding--parrafo'>
      <p>es un servicio de suscripción mensual que te mantendra informado</p> 
      <p>de toda la actividad musical que te interesa y te ofrecerá experiencias, </p>
      <p>entradas y otras ventajas especiales</p> 
      <p>Transparente </p>
      <p>Fiable</p>
      <p>Y cómodo </p>

      </div>
    <div>
      <button className='on-boarding--button' onClick={() => alert('Quiero registrarme ahora')}><Link to="/onBoarding2">Quiero registrarme ahora</Link></button>
      </div>
      <Link to="/"><p>Mas Tarde</p></Link>
    
    <p>AQUI VA EL NAVBAR</p>
    </div>
  )
}

export default OnBoardingFanClub2;