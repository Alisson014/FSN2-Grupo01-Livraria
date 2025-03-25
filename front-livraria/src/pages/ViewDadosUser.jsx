import React from "react";
import { useState, useEffect } from "react";
import '../styles/ViewDadosUser.css';
import { useParams } from "react-router-dom";

import Clients from "../assets/DataStatic/DataClients";
import Titulo from "../componentes/Titulo";
import BotaoVoltar from "../componentes/BotaoVoltar";

function ViewDadosUser(){
    const params = useParams();

    const [cliente, setcliente] = useState([]);
    // const cliente = Clients.find((c) => { return c.id === Number(params.id) });

    useEffect(() => {
        fetchCliente(Number(params.id));
    }, [params.id]);

    const fetchCliente = async (id) => {
        try {   
            const response = await fetch(`/api/clientes/${id}`); 
            const data = await response.json();
            setcliente(data);
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
            <Titulo title='Dados de usuário' />
            <p className="textoP"> Aqui constam dados que podem ser úteis para contato com clientes </p>
            <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div className={`UserDadosModal`} key={cliente.id}>
                        <div><p>Id:</p>  <strong>{ cliente.id }</strong> </div>
                        <div><p>Nome:</p>  <strong>{ cliente.nome }</strong> </div>
                        <div><p>E-mail:</p> <strong>{ cliente.email }</strong>  </div>
                        <div><p>Idade:</p> <strong>{ cliente.idade }</strong> </div>
                        <div><p>Telefone:</p> <strong>{ cliente.telefone }</strong> </div>
                        <div><p>Endereço:</p> <strong>{ cliente.endereco }</strong> </div>
                        <div><p>Criado em:</p> <strong>{ String(cliente.createdAt).slice(0,10) }</strong> </div>
                    </div>
            </div>
            <br/><br/><br/>
        </div>
    );
};


export default ViewDadosUser;