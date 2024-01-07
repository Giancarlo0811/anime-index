import { Link } from "react-router-dom"

function AnimeCard({image, title, type, status}) {
  return (
    <Link to={title}>
      <div className="anime">
        <div className="anime-img">
            <img src={image} />
        </div>
        <div className="anime-info">
            <h3>{title}</h3>
            <p style={{color: '#fbbf24'}}>{type}</p>
            <p>{status}</p>
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard