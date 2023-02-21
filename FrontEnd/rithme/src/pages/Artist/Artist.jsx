import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import ArtistCard from '../../components/Cards/ArtistCard';


function ArtistInfo({ artistID }) {
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/artists/63ee56af5abaf61fde81867f')
      .then(response => {
        setArtist(response.data);
      })

  }, [artistID]);

  if (!artists) {
    return null;
  }

  return (

    <div className='body'>

        <Header></Header>

            <div className="artist">

            {/* <ArtistCard></ArtistCard> */}

                <img src={artists.img} alt={artists.name} className="artists__name" />

            </div>
    </div>
  );
}

export default ArtistInfo;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import Header from "../../components/Header/Header";


// function Artist({ id }) {
//     const [artists, setArtists] = useState([]);
  
//     useEffect(() => {
//       axios.get(`http://localhost:5000/artists/${id}`)
//         .then(res => {
//           console.log(res.data);
//           setArtists(res.data)
//         })
//     }, [id])
  
//     return (
//       <div className="artist">
//         <Header />
        // <div className="artist__header">
        //   {artists.map((artist, id) => (
        //     <figure key={id}>
        //       <img src={artist.img} alt={artist.name} className="artists__name" />
        //     </figure>
        //   ))}
        // </div>
//       </div>
//     );
//   }
  
//   export default Artist;