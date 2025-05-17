import React from 'react';
import logo from '../assets/logo-header.svg';
import './Header.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'

const Header = () => {
    return (
        <header id='header' className='mt-3 px-3'>
            <img src={logo} alt="Logo Header" id='logo-header'/>
            <div className=''>
                    <IconField>
                        <InputIcon className="pi pi-search cursor-pointer" id='input-icon'> </InputIcon>
                        <InputText 
                           placeholder='Pesquisar produto...'
                           id='search-pesquisa'   
                           type='text'
                        />
                    </IconField> 
            </div>
            
        </header>
    );
}
 
export default Header;