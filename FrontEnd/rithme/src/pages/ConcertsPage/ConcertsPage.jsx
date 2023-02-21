import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ConcertsPage.scss';
import "../../styles/Slider.scss"        
import ConcertGallery from '../../components/ConcertGallery/ConcertGallery';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';

export default function ConcertsPage() {

    const [concerts, setConcerts] = useState([]);

    const dateSeparator = (array) => {
        let date1;
        let result = [[]];
        let pos = 0;
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (i===0){
                date1 = item.date;
                result[0].push(item);
            } else {
                if (item.date === date1){
                    result[pos].push(item);
                } else {
                    pos++;
                    result[pos]=[item];
                    date1 = item.date;
                }
            }
        }
        return result;
    }

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
            const concertsDateArray= dateSeparator(concertsOrdered);
            setConcerts(concertsDateArray);
        })
    }, [])

    return (
    <div className='concertsPage'>
        <div className='header'>
            <h1>Upgradify</h1>
        </div>
        <div className='main'>
        <div className="concerts-button__container">
                <Link to='/artists'><button className="concerts-button">Artistas</button></Link>
                <button className="concerts-button selected">Conciertos</button>
                <Link to='/halls'><button className="concerts-button">Salas</button></Link>
            </div>
            <div className="slider-container">
                <div className="slider">
                    {concerts.map((concertsArray)=> (
                        <ConcertGallery className='concerts-container' concerts={concertsArray}/>
                    ))}
                </div>
            </div>
        </div>
        <div className='footer'>
            <Navbar/>
        </div>
    </div>
    );
}