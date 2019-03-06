import React from 'react'
import {NavLink} from 'react-router-dom';
import  './Navbar.scss';
import logo from './bookLogo.png';


export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="title">GoodBooks</h1>
      <img className="book-logo" src={logo} alt="Book logo"/>
      <ul className="nav-links">
        <li>
            <NavLink to="/" className="nav-link">home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="nav-link">about</NavLink>
        </li>
        <li>
            <NavLink to="/books"className="nav-link">books</NavLink>
        </li>
      </ul>
    </div>
  )
}
