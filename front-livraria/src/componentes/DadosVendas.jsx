import React from "react";
// import { useState } from "react";
import '../styles/DadosGeren.css';
// import Clients from "../assets/DataStatic/DataClients";
import { Link } from "react-router-dom";


function DadosVendas({data, deleteL}){

    return(
         <div className="ContentDados">
            { data.map((d) => (
                <section className="Entidade" key={ d.id } >
                    <div className="dados">
                        <p>  { d.id }</p>                    
                        <p> { d.titulos } </p>
                    </div>

                    <div className="acoes-dados">        
                        <Link to={`/admin/venda/${d.id}`}><button >Dados</button></Link>

                    </div>
                    <div className="dados-r">
                        <button className="acoes-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </button>

                        <div className="acoes-dados-r">
                            <Link to={`/admin/vendas/${d.id}`}><button >Dados</button></Link>
                            
                        </div>
                    </div>
                </section>
            )) }
            
        </div>
    );
};

export default DadosVendas;
