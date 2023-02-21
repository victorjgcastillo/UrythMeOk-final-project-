import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ArtistCard from '../../components/Cards/ArtistCard';
import './Artist.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ArtistInfo() {

    const [concerts, setConcert] = useState([]);
    const [artists, setArtists] = useState([]);
    const {id} = useParams();

    // for (const concert of concerts) {
    //   if (id === concert.artists._id) {
        
    //   }
    // }


    useEffect(() => {

        axios(`http://localhost:5000/concert/63ef73655c834835c222c314`)
          .then(response => {
            setConcert(response.data);
            console.log(response.data);
          });
        }, [id]);





    return (

      <div className='body'>

              <Header></Header>

              <ArtistCard/>


              <div className='content'>
                  <p className='content__hall'></p>
                  <p className='content__city'></p>
                  {/* <p className='content__p'>{concerts.biography}</p> */}
              </div>

      </div>
    );
}


export default ArtistInfo;
