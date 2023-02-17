// import axios from "axios";
// import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import './HomePage.scss';

export default function HomePage() {
    
    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     axios('http://localhost:5000/artists')
    //     .then(res => {
    //         console.log(res.data);
    //         setCategories(res.data)
    //     })
    // }, [])

    return (

        <div className="home"> 
        <Header></Header>
        <button className="rounded-full home__button">Conciertos</button>
        <button className="rounded-full home__button">Amigos</button>
        <button className="rounded-full home__button">Fan Club</button>



                <div className="home__title">
                    <h1 className="text-5xl">¡Hola Mundo!</h1>
                    <h2 className="text-2xl">¿Qué concierto te apetece?</h2>
                </div>


                <div className="home__categories">

                <div className="home__categories--section">

                    <h3 className="font-bold home__categories--section--artist">ARTISTAS</h3>

                    <Slider></Slider>
                    
                        {/* <ul className="homes__categories--section--ul">

                        {categories.map((categorie, id)=> (
                        <figure key={id}>

                                <img src={categorie.img} alt={categorie.name} className="home__categories--section--ul--img"></img>   

                        </figure>
                        ))}
                        </ul> */}

                        {/* <div className="home__categories--section--artist--carrousel">
                            <div className="home__categories--section--artist-carrousel--slides">
                                {categories.map(categorie => (
                                <img key={categorie.id} src={categorie.img} alt={categorie.name} className="home__categories--section--artist-carrousel--slides--img"/>
                                ))}
                            </div>
                        </div> */}


                    <h3 className="font-bold">ESTILOS</h3>
                    <h3 className="font-bold">SALAS</h3>
                    <h3 className="font-bold">ONDAS</h3>
                    <h3 className="font-bold">REVISTAS</h3>
                </div>


            </div>
        </div>
    )
}