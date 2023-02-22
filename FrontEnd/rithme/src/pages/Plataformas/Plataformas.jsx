import HeaderAndBack from "../../components/HeaderAndBack/HeaderAndBack";
import Navbar from "../../components/Navbar/Navbar";
import "./Plataformas.scss";

export default function Plataformas() {
  return (
    <>
        
      <div className="plataformas">
        <div className="header">
            <HeaderAndBack back_url={'/config'} name={'Configuración'}/>
        </div>
        <div className="container">
            <h6 className="whitetext">SINCRONIZA TU MUSICA Y PLATAFORMAS</h6>
          

          <div className="container-2">
            <img
              src="https://developer.spotify.com/assets/branding-guidelines/logo@2x.png"
              alt=""
              srcset=""
            />
            <img
              src="https://i.pcmag.com/imagery/reviews/00RphstxTwTQ48coaU83lPT-7..v1569482503.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://www.elgrupoinformatico.com/static/Manuales/2019/10/deezer-logo-1300x650.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://i.blogs.es/c50993/google-play-music-gratis/1366_2000.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://static.abc.es/media/tecnologia/2022/02/10/youtube-3-ko0D--1024x512@abc.png"
              alt=""
              srcset=""
            />
            <img
              src="https://i.pcmag.com/imagery/reviews/01vJVJPhC1L36eDVDp2Mlsb-14..v1621319676.jpg"
              alt=""
              srcset=""
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/54822548e4b01ef9f5c62691/1553888216365-9VRK91VV3VK0UJMZLZQY/apple-music-logo.png?format=1500w"
              alt=""
              srcset=""
            />
            <img
              src="https://hiphoplifemag.es/wp-content/uploads/2021/03/tidal-vector-logo.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="footer">
            <Navbar/>
        </div>
      </div>
    </>
  );
}