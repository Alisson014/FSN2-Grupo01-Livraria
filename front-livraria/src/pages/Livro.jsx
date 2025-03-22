import React from "react";
import { useParams } from "react-router-dom";
import '../styles/Livros.css';

import General from "../assets/DataStatic/DataGeneral";
import Titulo from "../componentes/Titulo";
import BotaoPri from "../componentes/BotaoPri";

function Livro(){
    const params = useParams();
    const livro = General.find((l) => { return l.id === Number(params.id) });

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    return(
        <div className="ConteinerLivro">
            <img src={livro.imagem} alt='Imagem Livro' />
            <div className="InformacoesLivro">
                <Titulo title={livro.titulo} />
                <div className="DadosLivro">
                    <p>Autor: {livro.autor} </p>
                    <p>Pubicado em:  {livro.data_publicacao} </p>
                    <p>Em estoque: {livro.quantidade_estoque} </p>
                    <p>R$ {livro.preco} </p>
                </div>
                <hr/>
                <br/>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}} > {livro.resumo} </p>
                <br/>
                <BotaoPri label='Adicionar ao Carrinho' /> 
            </div>
        </div>
    );
};

export default Livro;