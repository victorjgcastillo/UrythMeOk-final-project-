import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtistsPage.scss';
import "../../styles/Slider.scss"        
import ArtistGallery from '../../components/ArtistGallery/ArtistsGallery';
import Header from '../../components/Header/Header';

export default function ArtistsPage() {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            const artists = res.data;
            console.log(artists)
            setArtists(artists);
        })
    }, [])

    return (
    <div className='artistsPage'>
        <Header></Header>
        <div className='main'>
            <div className="artists-button__container">
                <button className="artists-button selected">Artistas</button>
                <Link to='/concerts'><button className="artists-button">Conciertos</button></Link>
                <Link to='/halls'><button className="artists-button">Salas</button></Link>
            </div>
            <div className="slider-container">
                <div className="slider">
                    <ArtistGallery artists={artists}/>
                </div>
            </div>
        </div>
        <div className='footer'>
            Aqui estara el nav
        </div>
    </div>
    );
}

// <ConcertGallery className='artists-container' artists={artistsArray}/>
