import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';
import './TicketsPage.scss';

const TicketsPage = () => {

    const {id} = useParams();
    
    const [tickets, setTickets] = useState([]);
    const [artist, setArtist] = useState([]);
    const [hall, setHall] = useState([]);
    
    useEffect(() => {
        axios(`http://localhost:5000/concerts/`+id)
        .then(res => {
            setTickets(res.data);
            setArtist(res.data.artists[0]);
            setHall(res.data.hall);
        })
    }, [])   
    
    return(
    <div className="tickets">
        <div className='header'>
            <HeaderAndBack back_url={'/'} name={'Entrada'}/>
        </div>
        <div className='main'>
            <div className="tickets__imgContainer">
                <img src={artist?.img} alt={artist?.name} className="tickets__img" />
                <div className="tickets__fecha">
                    <span>{tickets.date}</span>
                </div>
            </div>
            <div className="tickets__datos">
                <h2>{artist.name}</h2>
                <h4>{hall.name} {tickets.time}</h4>
                <p>{hall.localization}</p>
            </div>
            <div className="tickets__mapa">    
                <iframe className="tickets__iframe" title="map" src={hall?.map}  style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="tickets__compra">
                <h3>{tickets.price} € </h3>
                <Link to={"/concerts/buy/"+tickets._id}> <button>comprar ahora</button></Link>
            </div>
        </div>
        <div className='footer'>
            <Navbar/>
        </div>
            
    </div>
    )
}

export default TicketsPage