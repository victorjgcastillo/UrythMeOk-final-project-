// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import './HomePage.scss';

export default function HomePage() {

    return (
        <div className="home"> 

            <div className="header">
                <Header></Header>
            </div>  
            <div className="main"> 
                <div className="home__container--buttons">
                    <Link to='/artists'><button className="home__button">Artistas</button></Link>
                    <Link to='/concerts'><button className="home__button" >Conciertos</button></Link>
                    <Link to='/halls'><button className="home__button">Salas</button></Link>
                </div>
                <div className="home__title">
                    <h1 className="">¡Bienvenido!</h1>
                    <h2 className="">¿Qué te apetece escuchar?</h2>
                </div>
                <div className="home__categories">
                    <div className="home__categories--section">
                        <Slider></Slider>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <Navbar/>
            </div>
            
        </div>
        
    )
}