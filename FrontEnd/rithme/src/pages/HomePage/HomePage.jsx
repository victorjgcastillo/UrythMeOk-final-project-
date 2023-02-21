// import axios from "axios";
// import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import './HomePage.scss';
import { Button } from 'primereact/button';
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";



export default function HomePage() {

        const numero = Math.floor(Math.random() * 100) + 1;
    

    return (

        <div className="home"> 

            <Header></Header>

            <div className="home__container--buttons">
            <Button label="Amigos" icon="pi pi-users" rounded size="sm" className="home__container--button"/>
            <Link to="/concerts"><Button label="Conciertos" outline badge={numero} rounded size="sm" className="home__container--button"/></Link>
            <Button label="Fan Club" icon="pi pi-star" rounded size="sm" className="home__container--button"/>
            </div>

            <div className="home__title">
                <h1 className="home__title--h1">Bienvenido!</h1>
                <h2 className="home__title--h2">¿Qué concierto te apetece?</h2>
            </div>

            <div className="home__categories">
                <div className="home__categories--section">
                    <Slider></Slider>
                </div>
            </div>


                <div className="home__footer">

                    <Navbar></Navbar>

                </div>
        </div>
    )
}