// import axios from "axios";
// import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import './HomePage.scss';

export default function HomePage() {

    return (

        <div className="home"> 
        <Header></Header>
        <div className="home__container--buttons">
        <button className="home__button">Conciertos</button>
        <button className="home__button">Amigos</button>
        <button className="home__button">Fan Club</button>
        </div>

                <div className="home__title">
                    <h1 className="">¡Hola Mundo!</h1>
                    <h2 className="">¿Qué concierto te apetece?</h2>
                </div>
                <div className="home__categories">
                <div className="home__categories--section">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    )
}