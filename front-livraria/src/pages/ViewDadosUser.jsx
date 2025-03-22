import React from "react";
import '../styles/ViewDadosUser.css';
import { useParams } from "react-router-dom";

import Clients from "../assets/DataStatic/DataClients";
import Titulo from "../componentes/Titulo";
import BotaoVoltar from "../componentes/BotaoVoltar";

function ViewDadosUser(){
    const params = useParams();
    const cliente = Clients.find((c) => { return c.id === Number(params.id) });

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
                        {/* <p>Criado em: { cliente.createdAt } </p> */}
                    </div>
            </div>
            <br/><br/><br/>
        </div>
    );
};


export default ViewDadosUser;