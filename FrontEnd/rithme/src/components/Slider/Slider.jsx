import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "../../styles/Slider.scss"
import { Link } from "react-router-dom";
import "./Slider.scss";
// import { AspectRatio } from '@chakra-ui/react'

export default function Slider() {

    const [artists, setArtist] = useState([]);
    const [ genres, setGenres] = useState([]);
    const [ halls, setHalls] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            console.log(res.data);
            setArtist(res.data);
        })
        axios('http://localhost:5000/genres')
        .then(res => {
            console.log(res.data);
            setGenres(res.data);
        })
        axios('http://localhost:5000/halls')
        .then(res => {
            console.log(res.data);
            setHalls(res.data);
        })
    }, [])
   
    return (

    

    <motion.div className="slider">

        <div className="slider__cont">
            <h1>ARTISTAS</h1>

            <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-2792.91}}>
            
                {artists.map((artist, id)=> (
                    
                <motion.div className="slider__item" key={id}>
                        <img src={artist.img} alt={artist.name} className="slider__img" />
                        <Link to={`/artist/${artist._id}`}><span className="slider__name">{artist.name}</span></Link>                 
                </motion.div>
                ))}

            </motion.div>
            </div>


        <div className="slider__cont">
            <h1>ESTILOS</h1>
            <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-922.33}}>

                {genres.map((genre, id)=> (
                <motion.div className="slider__item" key={id}>        
                        <img src={genre.img} alt={genre.name} className="slider__img" />
                        <span className="slider__name">{genre.name}</span>                  
                </motion.div>
                ))}

            </motion.div>
        </div>



        <div className="slider__cont">
            <h1>SALAS</h1>
            <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-922.33}}>

                {halls.map((halls, id)=> (
                <motion.div className="slider__item" key={id}>        
                        <img src={halls.img} alt={halls.name} className="slider__img" /> 
                        <span className="slider__name">{halls.name}</span>                 
                </motion.div>
                ))}

            </motion.div>
        </div>

    </motion.div>
)
}