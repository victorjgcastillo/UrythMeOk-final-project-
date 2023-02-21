import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtistsPage2.scss';
import { motion } from 'framer-motion';
import "../../styles/Slider.css"        
import ArtistGallery from '../../components/ArtistGallery/ArtistsGallery';

export default function ArtistsPage2() {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            const artists = res.data;
            // console.log(artists)
            setArtists(artists);
        })
    }, [])

    return (
    <div className='artistsPage'>
        <div className='header'>
            <h1>Artistas</h1>
        </div>
        <div className='main'>
            <div className="artists-button__container">
                <button className="artists-button selected">Artistas</button>
                <Link to='/concerts'><button className="artists-button">Eventos</button></Link>
                <Link to='/halls'><button className="artists-button">Salas</button></Link>
            </div>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-545.746}}>
                    <ArtistGallery artists={artists}/>
                </motion.div>
            </motion.div>
        </div>
        <div className='footer'>
            Aqui estara el nav
        </div>
    </div>
    );
}

// <ConcertGallery className='artists-container' artists={artistsArray}/>