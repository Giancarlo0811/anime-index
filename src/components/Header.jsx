import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <div className="logo">
            <Link to='/' className="neonText">Anime Index</Link>
        </div>
        <nav className="navbar">
              <ul>
                <li><Link to='/'>Inicio</Link></li>
              </ul>
        </nav>
    </header>
  )
}

export default Header