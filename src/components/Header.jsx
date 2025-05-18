import React from 'react';
import logo from '../assets/logo-header.svg';
import './Header.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import miniCart from '../assets/mini-cart.svg'

const Header = () => {
    return (
        <header id='header'>
           
           <div id="header-center">
                <img src={logo} alt="Logo Header" id="logo-header" />
                <div id="search-container">
                <IconField>
                    <InputIcon className="pi pi-search cursor-pointer" id="input-icon" />
                    <InputText
                    placeholder="Pesquisar produto..."
                    id="search-pesquisa"
                    type="text"
                    />
                </IconField>
                </div>
            </div>
            <div id='header-right'>
                <NavLink to="">Cadastre-se</NavLink>
            
                <Button 
               label="Entrar" 
               id='button-header'
                />
               <img src={miniCart} alt="" id='mini-cart'/>
            </div>
        </header>
    );
}
 
export default Header;