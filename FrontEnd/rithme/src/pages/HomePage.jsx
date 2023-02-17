import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import './HomePage.scss';

export default function HomePage() {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/artists')
        .then(res => {
            console.log(res.data);
            setCategories(res.data)
        })
    }, [])

    return (

        <div className="home"> 
        <Header></Header>
        <button className="rounded-full home__button">Conciertos</button>
        <button className="rounded-full home__button">Amigos</button>
        <button className="rounded-full home__button">Fan Club</button>


            <div className="home__categories">

                <div className="home__categories--title">
                    <h1 className="text-5xl">¡Hola Mundo!</h1>
                    <h2 className="text-2xl">¿Qué concierto te apetece?</h2>
                </div>

                <div className="home__categories--types">

                    <h3 class="font-bold">ARTISTAS</h3>
                    
                        <ul className="homes__categories--ul">

                        {categories.map((categorie, id)=> (
                        <figure key={id}>

                                <img src={categorie.img} alt={categorie.name} className="home__categories--img"></img>   
                                <h1 className="homes__escudos--name">{categorie.name}</h1>         

                        </figure>
                        ))}
                        </ul>


                    <h3 class="font-bold">ESTILOS</h3>
                    <h3 class="font-bold">SALAS</h3>
                    <h3 class="font-bold">ONDAS</h3>
                    <h3 class="font-bold">REVISTAS</h3>
                </div>


            </div>
        </div>
    )
}