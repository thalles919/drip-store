import React from 'react';
import logoHeader from '../assets/logo-header.svg';
import './Header.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import miniCart from '../assets/mini-cart.svg'

const Header = () => {
    return (
        <div id="header-wrapper">
            <header id='header'>
                <div id="header-center">
                    <img src={logoHeader} alt="Logo Header" id="logo-header" />
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
                    <NavLink to="/cadastro">Cadastre-se</NavLink>
                    <Button 
                        label="Entrar" 
                        id='button-header'
                    />
                    <img src={miniCart} alt="" id='mini-cart'/>
                </div>
            </header>

            <nav id="nav-links">
                <ul>
                    <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/produtos" className={({ isActive }) => isActive ? 'active' : ''}>
                        Produtos
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/categorias" className={({ isActive }) => isActive ? 'active' : ''}>
                        Categorias
                    </NavLink>
                    </li>
                    <li> 
                    <NavLink to="/meuspedidos" className={({ isActive }) => isActive ? 'active' : ''}> 
                        Meus Pedidos 
                    </NavLink> 
                    </li> 
                </ul> 
            </nav> 
        </div>
    );
}
 
export default Header;