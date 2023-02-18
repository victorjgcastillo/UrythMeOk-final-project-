import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ConcertsPage.scss';

export default function ConcertsPage() {

    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/concerts')
        .then(res => {
            const concerts = res.data;
            const concertsMap = concerts.map((concert) => {
                const dateParts = concert.date.split("/");
                const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
                return {...concert, dateFormat: dateObject};
            });
            const concertsOrdered = concertsMap.sort((a,b)=> a.dateFormat - b.dateFormat);
            setConcerts(concertsOrdered);
            console.log(concertsOrdered);
        })
    }, [])
    
    return (
    <div className='concertsPage'>
        <div className='header'>
            <h1>Concerts</h1>
        </div>
        <div className='main'>
            <div className="concerts-button__container">
                <button className="concerts-button">Artistas</button>
                <button className="concerts-button">Eventos</button>
                <button className="concerts-button">Salas</button>
            </div>
            <div className='concerts-info__container'>
                {concerts.map((concert,id)=> (
                        <div className='concert' key={id}>
                            <div className='concert__img'>
                                <img alt={'img'+id} src={concert.artists[0].img}></img>
                            </div>
                            <div className='concert__info'>
                                <h3>{concert.hall.name}</h3>
                                <h2>{concert.artists[0].name}</h2>
                                {concert.artists[0].genres.map((genre,id)=>(
                                    <p>{genre}</p>
                                ))}
                                <Link to='/buy'><button>Comprar</button></Link>
                            </div>
                        </div>
                ))}
            </div>
        </div>
        <div className='footer'>
            Aqui estara el nav
        </div>
    </div>
    );
}
