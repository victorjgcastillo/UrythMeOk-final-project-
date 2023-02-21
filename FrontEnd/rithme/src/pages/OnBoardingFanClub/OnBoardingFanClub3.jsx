
import './OnBoardingFanClub3.scss';
import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";
import { Link } from 'react-router-dom';


const OnBoardingFanClub3 = () => {

 


  return (
    
    <div className='on-boarding'>
        <div className='on-boarding--header'>
        <HeaderAndBack back_url={'/'} name={'Fan Club'}/>
        </div>
        <div className='on-boarding--primerdiv'>
        <h1>RITHME FAN CLUB</h1>
        <p>es un servicio premium con:</p>
        </div>
        <div className='on-boarding--parrafo'>
      <h2>Tours & Tickets</h2> 
      <p>Serás el primero en enterarte de las giras </p>
      <h2>Entradas aseguradas</h2>
      <p>Acceso a prioritario a entradas </p>
      <h2>Fan Store</h2>
      <p>Merchandising y eventos exclusivos </p>
      <h2>Amigos y mensajes</h2>
      <p>Porque serás de un club muy especial</p>
      <h2>Sin Publicidad</h2>
      </div>
    <div>
      <button className='on-boarding--button' onClick={() => alert('Registrarme por 9,99€ /mes')}><Link to="/reister">Registrarme por 9,99€ /mes </Link></button>
      </div>
     <Link to="/"><p>Mas Tarde</p></Link>
    
    <p>AQUI VA EL NAVBAR</p>
    </div>
  )
}

export default OnBoardingFanClub3;