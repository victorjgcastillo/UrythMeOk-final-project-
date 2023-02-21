import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ArtistCard.scss';

export default function ArtistCard({concertId}) {

    const [concertCard, setConcertCard] = useState([]);
    const [artist, setArtist] = useState([]);

    const getInfo = async()=>{
        const res = await axios(`http://localhost:5000/concerts/${concertId}`);
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
                    <h2 className="card__artist--name">{artist.name}</h2>
                    <p className="cardartist--date">{concertCard.date}</p>
                    <p className="cardartist--time">{concertCard.time}</p>
                    <p className="cardartist--price">{concertCard.price}€</p>
                </div>

            </div>
    </div>
    )
}