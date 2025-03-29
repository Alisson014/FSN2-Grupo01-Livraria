import React from "react";
import { useState, useEffect } from "react";
import '../styles/ViewDadosUser.css';
import { useParams } from "react-router-dom";

import Clients from "../assets/DataStatic/DataClients";
import Titulo from "../componentes/Titulo";
import BotaoVoltar from "../componentes/BotaoVoltar";

function ViewDadosVendas(){
    const params = useParams();
    const [venda, setvenda] = useState([]);
    // const cliente = Clients.find((c) => { return c.id === Number(params.id) });

    useEffect(() => {
        fetchVenda(Number(params.id));
    }, [params.id]);

    const fetchVenda = async (id) => {
        try {   
            const response = await fetch(`/api/vendas/${id}`); 
            const data = await response.json();
            setvenda(data);
            // setformData(data);
            
        } catch (error) {
            console.error('Erro ao buscar cliente', error);
        }
    };

    return(
        <div>
            <br/>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BotaoVoltar />
            </div>
            <Titulo title='Dados da Venda' />
            <p className="textoP"> Aqui constam dados que podem ser úteis para checagem de vendas </p>
            <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div className={`UserDadosModal`} key={venda.id}>
                        <div><p>Id:</p>  <strong>{ venda.id }</strong> </div>
                        <div><p>Id Livro:</p>  <strong>{ venda.id_livro }</strong> </div>
                        <div><p>Ids Livros:</p> <strong>{ venda.id_livros }</strong>  </div>
                        <div><p>Titulos:</p> <strong>{ venda.titulos }</strong> </div>
                        <div><p>Quantidade:</p> <strong>{ venda.quantidade_livros }</strong> </div>
                        <div><p>Preço :</p> <strong>R${ venda.preco_final }</strong> </div>
                        <div><p>Realizada em:</p> <strong>{ String(venda.data_realizada).slice(0,10) }</strong> </div>
                    </div>
            </div>
            <br/><br/><br/>
        </div>
    );
};


export default ViewDadosVendas;