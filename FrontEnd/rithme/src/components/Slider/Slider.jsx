import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "../../styles/Slider.css"




export default function Slider() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            console.log(res.data);
            setCategories(res.data)
        })
    }, [])
   
    return (
    <motion.div className="slider-container">
    <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-3022.91}}>

    {categories.map((categorie, id)=> (
    <motion.div className="slider-item" key={id}>

            <img src={categorie.img} alt={categorie.name} className="slider-img" />   
                 

    </motion.div>
    ))}
    </motion.div>
    </motion.div>
)
}
