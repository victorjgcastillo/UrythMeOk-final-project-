import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ArtistCard.scss';


export default function ArtistCard() {

    const [artistsCard, setArtistCard] = useState([]);
    const [concertCard, setConcertCard] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:5000/artists/${id}`)
          .then(response => {
            setArtistCard(response.data);
            console.log(response.data);
          });

        axios(`http://localhost:5000/concerts/63ef876b21ac0889074f103d`)
          .then(response => {
            setConcertCard(response.data);
            console.log(response.data);
          });

      }, [id]);

  

    return (

        <div className='card'>

            <div className="card__artist">

                <img src={artistsCard.img} alt={artistsCard.name} className="card__artist--img" />
                
                <h2 className="card__artist--name">{artistsCard.name}</h2>
                {/* <p className="card__artist--date">{concertCard.hall.date}</p>
                <p className="card__artist--time">{concertCard.time}</p>
                <p className="card__artist--price">{concertCard.price.$numberDecimal}</p> */}

            </div>
    </div>
    )
}
