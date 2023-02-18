import { Link } from 'react-router-dom';
import './HeaderAndBack.scss';

export default function HeaderAndBack({back_url, name}) {

  
  return (
        <div className='header-and-back'>
            <Link className='img-container' to={back_url}><img alt="back" src='./images/back.png' width='33' height='21'></img></Link>
            <h1>{name}</h1>
        </div>
    );
}