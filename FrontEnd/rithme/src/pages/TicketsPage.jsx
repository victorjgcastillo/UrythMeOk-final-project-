import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TicketsPage.scss';

const TicketsPage = () => {


    const {id} = useParams();
    
    const [tickets, setTickets] = useState([]);

    
    useEffect(() => {
        axios('http://localhost:5000/artists/${id}')
        .then(res => {
            console.log(res.data);
            setTickets(res.data);
        })
    }, [])
    
    
    return(
    <div className="tickets">
            <div className="tickets__imgContainer">
                {/* <img src="s" alt="">img</img> */}
                <div className="tickets__fecha">
                    <p>fecha</p>
                </div>
            </div>
            <div className="tickets__datos">
                <h2>nombre</h2>
                <h4>lugar</h4>
                <p>calle</p>
            </div>
            <div className="tickets__mapa">
                <map>mapa</map>
            </div>
            <div className="tickets__compra">
                <h3>precio</h3>
                <button>comprar ahora</button>
            </div>
        </div>
    )
}

export default TicketsPage