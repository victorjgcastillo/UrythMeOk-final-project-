import { Link } from 'react-router-dom';
import './ConcertGallery.scss';

export default function ConcertGallery({concerts}) {

  return (
    <div className='concerts-gallery'>
        <h2 className='concerts-gallery__date'>{concerts[0].date}</h2>
        {concerts.map((concert,index)=> (
            <div className='concert' key={concert._id}>
                <div className='concert__img'>
                    <img alt={'img'+index} src={concert.artists[0].img}></img>
                </div>
                <div className='concert__info'>
                    <div className='concert__info--1'>
                        <h3 className='concert__info--1-hall'>{concert.hall.name}</h3>
                        <h3 className='concert__info--1-city'>{concert.hall.city}</h3>
                    </div>
                    <div className='concert__info--2'>
                        <h2>{concert.artists[0].name}</h2>
                        <Link to={'/concerts/'+concert._id} ><button>Comprar</button></Link>
                    </div>
                    <div className='concert__info--3'>
                        <div className='artist_genres'>
                            {concert.artists[0].genres.map((genre,id)=>(
                                <span className='genre'>{genre.name}</span>
                            ))}
                        </div>
                        <span className='price'>{concert.price} €</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
}


