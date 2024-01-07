import { useState } from "react"

function Search({searchAnime}) {
    const [animeName, setAnimeName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchAnime(animeName);
    }

  return (
    <div className="search">
        <h4>Buscar Anime</h4>
        <form action="" onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre del anime" 
                 onChange={(e) => {
                    setAnimeName(e.target.value)
                }}
            />
            <button type="submit">Buscar</button>
        </form>
    </div>
  )
}

export default Search