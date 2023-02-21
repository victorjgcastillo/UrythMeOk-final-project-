import axios from "axios";
import { useEffect, useState } from "react";
import './HallsPage.scss'
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";


export default function HallsPage() {
    
    const [ halls, setHalls] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/halls')
        .then(res => {
            console.log(res.data);
            setHalls(res.data)
        })
    }, [])

    return (
        <div className="halls">
            <div className="header-cont">
                <Header></Header>
            </div> 
            <div className="main">
                <div className="concerts-button__container">
                    <Link to='/artists'><button className="concerts-button">Artistas</button></Link>
                    <Link to='/concerts'><button className="concerts-button">Conciertos</button></Link>
                    <Link to='/halls'><button className="concerts-button selected">Salas</button></Link>
                </div>
                <div className="halls__motion">
                    {halls.map((halls, id)=> (
                        <div className="halls__item" key={id}>        
                            <img src={halls.img} alt={halls.name} className="halls__img" /> 
                            <div className="halls__info">
                                <h2>{halls.name}</h2>   
                                <h3>{halls.city}</h3>              
                                <h3>{halls.localization}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
            <div className="footer">
                <Navbar/>

            </div>
        </div>
    )
}