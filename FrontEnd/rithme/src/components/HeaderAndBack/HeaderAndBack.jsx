import { Link } from 'react-router-dom';
import './HeaderAndBack.scss';

export default function HeaderAndBack({back_url, name}) {

  
  return (
        <div className='header-and-back'>
            <Link className='img-container' to={back_url}>
            <img alt="back" width='25' height='25' src='https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png'></img>
            </Link>
            <h1>{name}</h1>
        </div>
    );
}