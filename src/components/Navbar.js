import { Link, NavLink } from 'react-router-dom'

import styles from './Navbar.css'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src={logo} />
      </NavLink>

      {/* ------ */}

      <ul className="links_list">
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/about">Modalidades</NavLink>
        </li>

        <li>
          <NavLink to="/">Eventos</NavLink>
        </li>

        <li>
          <NavLink to="/">Produtos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
