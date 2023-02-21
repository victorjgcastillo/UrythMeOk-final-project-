import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "../../styles/Slider.css"
import { Link } from "react-router-dom";



export default function Slider() {

    const [ artists, setArtists] = useState([]);
    const [ genres, setGenres] = useState([]);
    const [ halls, setHalls] = useState([]);

    useEffect(() => {
        
        axios('http://localhost:5000/artists')
        .then(res => {
            console.log(res.data);
            setArtists(res.data);
        })
        axios('http://localhost:5000/genres')
        .then(res => {
            console.log(res.data);
            setGenres(res.data)
        })
        axios('http://localhost:5000/halls')
        .then(res => {
            console.log(res.data);
            setHalls(res.data)
        })
        
    }, [])
   
    return (

    

    <motion.div className="slider-container">

        <div className="slider-h1">
            <h3>ARTISTAS</h3>

            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-2992.91}}>
        
                {artists.map((artist, id)=> (
            
                <motion.div className="slider-item" key={id}>
                        <img src={artist.img} alt={artist.name} className="slider-img"/>
                        <Link to={`/artist/${artist._id}`}><span className="slider-name">{artist.name}</span></Link>                  

                </motion.div>
                ))}

            </motion.div>
        </div>



        <div className="slider-h1">
            <h3>ESTILOS</h3>

            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-1012.33}}>

                {genres.map((genre, id)=> (
                <motion.div className="slider-item" key={id}>        
                        <img src={genre.img} alt={genre.name} className="slider-img" />
                        <Link to={`/artist/${genre._id}`}><span className="slider-name">{genre.name}</span></Link>
                </motion.div>
                ))}

            </motion.div>
        </div>



        <div className="slider-h1">
            <h3>SALAS</h3>

            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-1012.33}}>

                {halls.map((halls, id)=> (
                <motion.div className="slider-item" key={id}>        
                        <img src={halls.img} alt={halls.name} className="slider-img" />
                        <Link to={`/artist/${halls._id}`}><span className="slider-name">{halls.name}</span></Link>               
                </motion.div>
                ))}

            </motion.div>
        </div>


    </motion.div>
)
}
