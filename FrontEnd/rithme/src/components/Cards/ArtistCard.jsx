import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ArtistCard.scss';
import { Button } from 'primereact/button';


export default function ArtistCard({concertId}) {

    // const [concertCard, setConcertCard] = useState([]);
    // const [artist, setArtist] = useState([]);
    // // const {id} = useParams();

    // const getInfo = async()=>{
    //     const res = await axios(`http://localhost:5000/concerts/${concertId}`);
    //     // const res = await axios(`http://localhost:5000/artists/${id}`);
    //     setConcertCard(res.data);
    //     // setArtist(res.data);
    //     setArtist(res.data.artists[0]);
    // }

    // useEffect(() => {
    //     getInfo();
    // }, [concertId]);

    const [concerts, setConcert] = useState([]);
    const [artists, setArtists] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        axios(`http://localhost:5000/concerts/`)
          .then(response => {
            console.log(response.data)
            setConcert(response.data);
            console.log(response.data.genres);
          });


          axios(`http://localhost:5000/artists/${id}`)
          .then(response => {
            console.log(response.data)
            setArtists(response.data);
          });

        }, [id]);
        

    return (

        <div className='card'>

            <div className="card__artist">

                <img src={artists?.img} alt={artists?.name} className="card__artist--img" />
                <div className="card__artist--info">
                    <h2 className="card__artist--name">{artists.name}</h2>
                    <p className="cardartist--date">{concerts.date}</p>
                    <p className="cardartist--time">{concerts.time}</p>
                    <Link to="/tickets"><Button label="Comprar" size="sm" rounded /></Link>
                </div>

            </div>
    </div>
    )
}