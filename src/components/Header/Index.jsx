import { Table } from '@mui/material';
import React from 'react'
import './header.css';
const Header = () => {
    return ( 
        <header>
            <div className="logo"></div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Sobre
                </li>
                <li>
                    Contato
                </li>
            </ul>
        </header>
     );
}
 
export default Header;