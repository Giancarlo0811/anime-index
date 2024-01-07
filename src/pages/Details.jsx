import { useState, useEffect } from "react";
import DetailCard from "../components/DetailCard"
import { useParams } from "react-router-dom";

function Details() {
    const [isLoading, setIsLoading] = useState(true);
    const [anime, setAnime] = useState(null);

    const {name} = useParams();

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
        .then(response => response.json())
        .then(data => {
          const dataArray = data.data;
          const getAnime = dataArray.filter(anime => anime.title === name)[0];
          setAnime(getAnime);
          setIsLoading(false);
        })
    },[name]);

  return (
    <>
        {isLoading &&
        <div className="anime-container">
          <h1>Cargando...</h1>
        </div>
        }
        
        {!isLoading &&
            <DetailCard 
              image={anime.images.jpg.image_url}
              title={anime.title}
              score={anime.score}
              title_english={anime.title_english}
              title_japanese={anime.title_japanese}
              genres={anime.genres}
              episodes={anime.episodes}
              synopsis={anime.synopsis}
            />
        }
    </>
  )
}

export default Details