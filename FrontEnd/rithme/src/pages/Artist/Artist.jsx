import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ArtistCard from '../../components/Cards/ArtistCard';
import './Artist.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ArtistInfo() {

    const [hall , setHall] = useState([]);
    const [artists, setArtists] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        axios(`http://localhost:5000/artists/${id}`)
          .then(response => {
            setArtists(response.data);
            console.log(response.data);
          });

        axios(`http://localhost:5000/concert/${id}`)
          .then(response => {
            setHall(response.data);
            console.log(response.data);
          });
        }, [id]);


  return (

    <div className='body'>

            <Header></Header>

            <ArtistCard></ArtistCard>

            <div className='content'>
                <p className='content__hall'></p>
                <p className='content__city'></p>
                <p className='content__p'>{artists.biography}</p>
            </div>

    </div>
  );
}

export default ArtistInfo;
