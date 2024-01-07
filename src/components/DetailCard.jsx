import { Link } from "react-router-dom"

function DetailCard({image, title, score, title_english, title_japanese, genres, synopsis, episodes}) {
  return (
    <div className="detail-container">
        <div className="detail-image">
          <img src={image} alt="" />
        </div>
        <div className="anime-details">
          <h1>{title}</h1>
          <p><span>Puntaje:</span> {score}</p>
          <p><span>Nombre en inglés:</span> {title_english}</p>
          <p><span>Nombre en japonés:</span> {title_japanese}</p>
          <p><span>Episodios:</span> {episodes}</p>
          <p><span>Géneros:</span> {genres.map((genre, index) => (`${index ? ', ' : ''} ${genre.name}`))}</p>
        </div>
        <div className="anime-synopsys">
          <h1>Synopsys</h1>
          <p>{synopsis}</p>
        </div>
        <Link to='/'><button className="back">Volver al Inicio</button></Link>
    </div>
  )
}

export default DetailCard