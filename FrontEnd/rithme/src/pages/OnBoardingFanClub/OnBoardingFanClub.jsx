
import './OnBoardingFanClub.scss';
import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";
import { Link } from 'react-router-dom';


const OnBoardingFanClub = () => {

 


  return (
    
    <div className='on-boarding'>
    <div className='on-boarding--header'>
    <HeaderAndBack back_url={'/'} name={'Fan Club'}/>
    </div>
      <img src='https://cdn.zeplin.io/5e2df7d8efc06052f80b890d/assets/00817CD0-4E0C-4E9E-AF0D-F9F4D3E112A9.png' alt=''></img>

        <div className='on-boarding--parrafo'>
      <h2>Bienvenido al club donde vivirás tu música.</h2> 
      <p>RYTHME te ofrecera aquí </p>
      <p>todo un mundo de experiencias exclusivas</p>
      <p>para apasionados de la música </p>
      <p>tan exigentes como tu. ¿Te unes? </p>

      </div>
    <div>
      <button className='on-boarding--button' onClick={() => alert('Quiero Unirme ahora')}><Link to="/onBoarding1">Quiero Unirme ahora </Link></button>
      </div>
      <Link to="/"><p>Mas Tarde</p></Link>
    
    <p>AQUI VA EL NAVBAR</p>
    </div>
  )
}

export default OnBoardingFanClub;