import { NavLink } from 'react-router-dom'

import styles from './Navbar.css'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="img" src={logo} />
      </div>

      <ul className="links_list">
        <li>Sobre</li>

        <li>Modalidades</li>

        <li>Produtos</li>

        <li>Home</li>
      </ul>
    </nav>
  )
}

export default Navbar
