import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CheerLogo from './assets/SmallCheerLogo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <a href="#" className="title"><img src={CheerLogo}></img></a>

      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#pictures">Pictures</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#posts">Posts</a>
        </li>
        <li>
          <a href="#form">Forms</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar