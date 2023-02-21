import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TicketsPage.scss';

export default function TicketsPage() {

    const [tickets, setTickets] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        axios(`http://localhost:5000/concerts/`)
          .then(response => {
            setTickets(response.data);
            console.log(response.data);
          });
    }, [id]);


    return(

    <div className="tickets">
            <div className="tickets__container">
            
                <figure key={id}>

                    <img src={tickets.img} alt={tickets.name} className="tickets__container--img"></img>

                </figure>

                <div className="tickets__date">
                    <p>fecha</p>
                </div>

            </div>


            <div className="tickets__info">

                <h2>{tickets.hall.name}</h2>
                <h4>lugar</h4>
                <p>calle</p>

            </div>

            <div className="tickets__map">

                <map>mapa</map>

            </div>

            <div className="tickets__compra">

                <h3>hola</h3>
                <button className='tickets__compra--button'>comprar ahora</button>

            </div>
        </div>
    )
}

