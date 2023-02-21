import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ArtistCard.scss';
import 'primeicons/primeicons.css';


export default function ArtistCard({concertId}) {

    const [concertCard, setConcertCard] = useState([]);
    const [artist, setArtist] = useState([]);

    const getInfo = async()=>{
        // const res = await axios(`http://localhost:5000/concerts/${concertId}`);
        const res = await axios(`http://localhost:5000/concerts/63ef73655c834835c222c314`);
        setConcertCard(res.data);
        setArtist(res.data.artists[0]);
    }

    useEffect(() => {
        getInfo();
    }, [concertId]);

    return (

        <div className='card'>

            <div className="card__artist">

                <img src={artist?.img} alt={artist?.name} className="card__artist--img" />
                <div className="card__artist--info">
                    <h2 className="card__artist--info--name">{artist.name}</h2>
                    <p className="card__artist--info--date">{concertCard.date}</p>
                    <p className="card__artist--info--time">{concertCard.time}</p>
                    <p className="card__artist--info--price">30</p>
                </div>

            </div>
    </div>
    )
}

