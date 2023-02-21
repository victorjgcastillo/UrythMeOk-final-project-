import { Link } from 'react-router-dom';
import './ArtistGallery.scss';

export default function ArtistGallery({artists}) {

  return (
    <div className='artists-gallery'>
        {artists.map((artist,index)=> (
            <div className='artist' key={artist._id}>
                <div className='artist__img'>
                    <img alt={'img'+index} src={artist.img}></img>
                </div>
                <div className='artist__info'>
                    <div className='artist__info--1'>
                        <h2>{artist.name}</h2>
                        <Link to={'/artist/'+artist._id} ><button>+ Info</button></Link>
                    </div>
                    <div className='artist__info--2'>
                        <div className='artist_genres'>
                            {artist.genres.map((genre,id)=>(
                                <h4 key={id} className='genre'>{genre.name}</h4>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
}


