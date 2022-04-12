import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return ( 
        <header>
            <div className="logo"></div>
            <ul>
                <li>
                   <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to='/contato'>Contato</Link>
                </li>
                <li>
                    <Link to="/">Sair</Link>
                </li>
            </ul>
        </header>
     );
}
 
export default Header;