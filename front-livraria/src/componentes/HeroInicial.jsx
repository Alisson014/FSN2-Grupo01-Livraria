import React from "react";
import '../styles/HeroInicial.css';

import Titulo from "./Titulo";
import BotaoPri from "./BotaoPri";
import BotaoSec from "./BotaoSec";

function HeroInicial({titulo, texto, imagemB}){
    return(
        <header className="Hero">
            <div className="text">
                <Titulo title={titulo}/>
                <p>{texto}</p>
                <BotaoSec label="Conheça Mais" /> &nbsp;&nbsp;&nbsp;&nbsp;
                <BotaoPri label='Destaques'/>
            </div>

            <img src={imagemB} alt="imagem-livros"/>

        </header>
    );
}

export default HeroInicial;