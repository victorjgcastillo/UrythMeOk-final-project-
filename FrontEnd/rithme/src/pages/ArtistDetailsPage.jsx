import React from 'react'



const ArtistDetailsPage = () => {

  return (
    <div className="artistDetailContainer">
        <div className="artistConcert">
            <div>imagen</div>
            <div>
            <h4>nombre</h4>
            <h5>fecha</h5>
            <p>hora</p>
            <p>precio</p>
            <button>play</button></div>



        </div>
            <div className="artistConcertButtons">
                <button>Comprar</button>
                <button>Compartir</button>
            </div>
            <div>
                <h4>sala</h4>
                <p>artista</p>
                <p>genero</p>
                <p>descrición</p>
            </div>
                  
    </div>
  )
}

export default ArtistDetailsPage