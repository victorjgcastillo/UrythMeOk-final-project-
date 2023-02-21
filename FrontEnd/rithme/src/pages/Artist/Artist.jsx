import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ArtistCard from '../../components/Cards/ArtistCard';
import './Artist.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';


function ArtistInfo() {

    const [concerts, setConcert] = useState([]);
    const [artists, setArtists] = useState([]);
    const {id} = useParams();

    // for (const concert of concerts) {
    //   if (id === concert.artists._id) {
        
    //   }
    // }


    useEffect(() => {

        axios(`http://localhost:5000/artists/${id}`)
          .then(response => {
            setConcert(response.data);
            setArtists(response.data);
            console.log(response.data);
          });
        }, [id]);





    return (

      <div className='body'>

        <div className='body__header'>
              <h1>Upgradify</h1>
        </div>
              <ArtistCard/>


        <div className='body__content'>
          <p className='body__content--hall'></p>
          <p className='body__content--city'></p>
          <p className='body__content--p'>{artists.biography}</p>
        </div>

        <div className='body__footer'>
            <Navbar/>
        </div>

      </div>
    );
}


export default ArtistInfo;