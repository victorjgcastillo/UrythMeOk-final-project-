import React, { useState, useEffect } from 'react';
import ArtistCard from '../../components/Cards/ArtistCard';
import './Artist.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import HeaderAndBack from '../../components/HeaderAndBack/HeaderAndBack';
import { Button } from 'primereact/button';



function ArtistInfo() {

    const [concerts, setConcert] = useState([]);
    const [artists, setArtists] = useState([]);
    const {id} = useParams();


    useEffect(() => {

        axios(`http://localhost:5000/artists/${id}`)
          .then(response => {
            console.log(response.data)
            setConcert(response.data);
            setArtists(response.data);
            console.log(response.data.genres);
          });
        }, [id]);

    return (

      <div className='body'>

        <div className='body__header'>
          <HeaderAndBack back_url={'/'} name={artists.name}/>
        </div>

        <div className='body__main'>

        {/* <ArtistCard></ArtistCard> */}
        <div className='body__main--artist'>
            <img src={artists.img} className="body__main--artist--img" alt="img" width='200'/>

            <div className='genres'>

              <p>{artists.name}</p>

              {artists?.genres?.map((genre,id)=>(<span key={id}>{genre.name}</span>))}

            </div>
            
          </div>

          <div className='body__content'>
            {/* <p className='body__content--hall'></p>
            <p className='body__content--city'></p> */}
            <p className='body__content--p'>{artists.biography}</p>

            <Link to="/concerts"><Button label="Próximos eventos" raised /></Link>

          </div>

        </div>

        <div className='body__footer'>
            <Navbar/>
        </div>

      </div>
    );
}


export default ArtistInfo;