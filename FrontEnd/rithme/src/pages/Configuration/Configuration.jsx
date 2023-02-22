import { Link } from "react-router-dom";
import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";
import Navbar from "../../components/Navbar/Navbar";
import "./Configuration.scss";

export default function PersonalYconex() {
  return (
    <>
      <div className="config-main">
        <div className="header">
            {/* <div className="config"> */}
            <HeaderAndBack back_url={'/'} name={'Configuración'}/>
          {/* </div> */}

        </div>
        <div className="container">
          <div>
            <h6 className="whitetext">PERSONAL</h6>
          </div>

          <div>
            <button>Editar perfil</button>
          </div>

          <div>
            <button>Ubicacion</button>
          </div>

          <div>
            <button>Sincronizar calendario</button>
          </div>

          <div>
            <button>Notificaciones</button>
          </div>

          <div>
            <button>Medios de pago</button>
          </div>

          <div>
            <button>Historial de compras</button>
          </div>

          <div>
            <h6 className="whitetext">SINCRONIZAR PREFERENCIAS</h6>
          </div>

          <div>
            <Link to="/config/music-platforms"><button>Sincronizar tu musica</button></Link>
          </div>

          <div>
            <button>Sincronizar tu salas favoritas</button>
          </div>

          <div>
            <button>Sincronizar tus radios y podcast</button>
          </div>

          <div>
            <button>Sincronizar tus revistas</button>
          </div>

          <div>
            <button>Sincronizar tus contactos</button>
          </div>

          <div>
            <button>Ayuda</button>
          </div>

          <div>
            <button>Cerrar sesion</button>
          </div>
        </div>
        <div className='footer'>
            <Navbar/>
        </div>
      </div>
    </>
  );
}