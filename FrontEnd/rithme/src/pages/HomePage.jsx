import Header from "../components/Header/Header";
import Conciertos from "../shared/Conciertos";

export default function HomePage() {
    return (

        <div>
        <Header></Header>
        <Conciertos></Conciertos>

            <div className="categories">

                <div className="categories__title">
                    <h1>Hola!</h1>
                    <h2>¿Qué concierto te apetece?</h2>
                </div>

                <div className="categories__types">
                    <h3>ARTISTAS</h3>
                    <h3>ESTILOS</h3>
                    <h3>SALAS</h3>
                    <h3>ONDAS</h3>
                    <h3>REVISTAS</h3>
                </div>


            </div>
        </div>
    )
}