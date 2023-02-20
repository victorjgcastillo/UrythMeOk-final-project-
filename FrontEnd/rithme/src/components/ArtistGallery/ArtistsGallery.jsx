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
                        <h3>{artist.name}</h3>
                        <Link to={'/artists/'+artist._id} ><button>+ Info</button></Link>
                    </div>
                    <div className='artist__info--2'>
                        <div className='artist_genres'>
                            {artist.genres.map((genre,id)=>(
                                <span key={id} className='genre'>{genre.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
}


