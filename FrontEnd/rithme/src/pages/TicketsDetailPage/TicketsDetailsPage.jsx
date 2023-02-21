import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import Navbar from '../../components/Navbar/Navbar';
import './TicketsDetailsPage.scss';

const TicketsDetailsPage = () => {
    const {id} = useParams();
    
    const [tickets, setTickets] = useState([]);
    const [artist, setArtist] = useState([]);
    const [hall, setHall] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;
    
    useEffect(() => {
        axios(`http://localhost:5000/concerts/`+id)
        .then(res => {
            console.log(res.data);
            setTickets(res.data);
            setArtist(res.data.artists[0]);
            setHall(res.data.hall);
        })
    }, [])    
    
    return(
    <div className="tickets">
        <div className='header'>
            <HeaderAndBack back_url={'/my-concerts'} name={'Información Detallada'}/>
        </div>
        <div className='main'>
        <div className="tickets__imgContainer">
            <img src={artist?.img} alt={artist?.name} className="tickets__img" />
            <h2>{artist.name}</h2>
                <div className="tickets__fecha">
                
                <span>{tickets.date}</span>
                <h4>{tickets.time}</h4>
                <h3>{tickets.price} € </h3>
                </div>
            </div>
            <div className="tickets__datos">
                <h2>{artist.name}</h2>
                <h2>en {hall.name}</h2>
                <p>{hall.localization}</p>
                <h4>Apertura de puertas: {tickets.time}</h4>
                <img src="https://play-lh.googleusercontent.com/lomBq_jOClZ5skh0ELcMx4HMHAMW802kp9Z02_A84JevajkqD87P48--is1rEVPfzGVf=w240-h480-rw" alt="QR"/>
            </div>
            <div className="tickets__compra">
                
                <Link to=""> <button>Descargar</button></Link>
            </div>
        </div>
        <div className='footer'>
            <Navbar></Navbar>
        </div> 
    </div>
    )
}

export default TicketsDetailsPage