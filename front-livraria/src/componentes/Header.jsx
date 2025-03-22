import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/Header.css';

import img from '../assets/images/img';
import AlterUserModal from "./AlterUserModal";
import '../styles/AlterUserModal.css';
import '../styles/ShopCart.css';

import ShopCart from "./ShopCart";

function Header(){

    const [IsActive, setIsActive] = useState(false);
    
    function Activer(){
        setIsActive(!IsActive);
    }

    const [IsShopCart, setShopCart] = useState(false);

    function ActiverShopCart(){
        setShopCart( !IsShopCart );
    }

    return (
        <div>
        <header className="navbar">            
            <div className="menuLinks">
                <a href="/" style={{textDecoration: 'none'}}> 
                    <div className="logo">
                        <img src={ img.logo } alt="Logo-react"/>
                        <div className="Empresa">
                            <h1>Ressonância Literária</h1>
                        </div>
                    </div>
                </a>

                {/* <Link to="/" text="Home" cor="claro" />
                <Link to="/OtherPage" text="OtherPage" cor="claro" />
                <Link to="/OtherPage2" text="OtherPage2" cor="claro" /> */}
            </div>
            {/* <MenuResponsive/> */}

            <div id="MenuDesk" className="cont-buttons">
                <Link to={'/'}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                        </svg>
                    </button>
                </Link>
                
                <Link onClick={() => {Activer()}}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path style={{ fillRule: "evenodd" }} d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </button>
                </Link>
                
                <Link to={'/Pesquisar'}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </Link>

                <Link onClick={() => { ActiverShopCart() }}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </button>
                </Link>

                
                
            </div>
        </header>

        <AlterUserModal classN={`cModal  ${ IsActive ? 'ShowModalUser' : ''}`} disable={() => {Activer()}} />
        <ShopCart classN={ `ShopCart  ${ IsShopCart ? 'ShowShopCart' : ''}` } />
        </div>
    );
};


export default Header;