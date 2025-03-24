import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/Livros.css';

import General from "../assets/DataStatic/DataGeneral";
import Titulo from "../componentes/Titulo";
import BotaoPri from "../componentes/BotaoPri";

function Livro(){
    const params = useParams();
    const [livro, setlivro] = useState([]);
    // const livro = General.find((l) => { return l.id === Number(params.id) });

    useEffect(() => {
            fetchLivro(Number(params.id));
        }, [params.id]);
    
        const fetchLivro = async (id) => {
            try {
                const response = await fetch(`/api/livros/${id}`); 
                const data = await response.json();
                setlivro(data); 
            } catch (error) {
                console.error('Erro ao buscar livros', error);
            }
        };

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    return(
        <div className="ConteinerLivro">
            <img src={livro.imagem_capa} alt='Imagem Livro' />
            <div className="InformacoesLivro">
                <Titulo title={livro.titulo} />
                <div className="DadosLivro">
                    <p>Autor: {livro.autor} </p>
                    <p>Pubicado em:  {String(livro.data_publicacao).slice(0,10)} </p>
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