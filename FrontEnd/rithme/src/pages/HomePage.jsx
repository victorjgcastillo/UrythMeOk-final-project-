import Header from "../components/Header/Header";
import './HomePage.scss';

export default function HomePage() {
    return (

        <div className="home"> 
        <Header></Header>
        <button className="rounded-full">Conciertos</button>
        <button className="rounded-full">Amigos</button>
        <button className="rounded-full">Fan Club</button>


            <div className="home__categories">

                <div className="home__categories--title">
                    <h1>Hola!</h1>
                    <h2>¿Qué concierto te apetece?</h2>
                </div>

                <div className="home__categories--types">
                    <h3 class="font-bold">ARTISTAS</h3>
                    <h3 class="font-bold">ESTILOS</h3>
                    <h3 class="font-bold">SALAS</h3>
                    <h3 class="font-bold">ONDAS</h3>
                    <h3 class="font-bold">REVISTAS</h3>
                </div>


            </div>
        </div>
    )
}