import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "../../styles/Slider.scss"
// import { AspectRatio } from '@chakra-ui/react'



export default function Slider() {

    const [categories, setCategories] = useState([]);
    const [ genres, setGenres] = useState([]);
    const [ halls, setHalls] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            console.log(res.data);
            setCategories(res.data);
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

    

    <motion.div className="slider">

    <div className="slider__h1">
    <h1>ARTISTAS</h1>
    </div>
    <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-3512.91}}>
    
    {categories.map((categorie, id)=> (
        
    <motion.div className="slider__item" key={id}>
            <img src={categorie.img} alt={categorie.name} className="slider__img" />                  
    </motion.div>
    ))}
    </motion.div>


    <div className="slider__h1">
    <h1>ESTILOS</h1>
    </div>
    <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-1212.33}}>

    {genres.map((genre, id)=> (
    <motion.div className="slider__item" key={id}>        
            <img src={genre.img} alt={genre.name} className="slider__img" />                  
    </motion.div>
    ))}
    </motion.div>


    <div className="slider__h1">
    <h1>SALAS</h1>
    </div>
    <motion.div className="slider__motion" drag='x' dragConstraints={{right: 0, left:-1212.33}}>

    {halls.map((halls, id)=> (
    <motion.div className="slider__item" key={id}>        
            <img src={halls.img} alt={halls.name} className="slider__img" />                  
    </motion.div>
    ))}
    </motion.div>
    </motion.div>
)
}
