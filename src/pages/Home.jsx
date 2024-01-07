import { useEffect, useState } from "react"
import Search from "../components/Search"
import AnimeCard from "../components/AnimeCard";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [animeData, setAnimeData] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then(response => response.json())
    .then(data => {
      const dataArray = data.data;
      setAnimeData(dataArray);
      setIsLoading(false);
    })
  },[name]);

  console.log(animeData)

  return (
    <>
      <Search searchAnime={(text) => {
        setName(text);
        setIsLoading(true);
      }}/>
      <h1 className="home-title">Anime</h1>
      {isLoading &&
        <div className="anime-container">
          <h1>Cargando...</h1>
        </div>
      }

      {!isLoading && animeData.length === 0 &&
        <div className="anime-container">
          <h1>Anime no Encontrado</h1>
        </div>
      }

      {!isLoading &&
        <div className="anime-container">
          {animeData.map(anime => (
            <AnimeCard 
              key={anime.mal_id} 
              image={anime.images.jpg.image_url} 
              title={anime.title}
              type={anime.type}
              status={anime.status}
            />
          ))}
        </div>
      }
    </>
  )
}

export default Home