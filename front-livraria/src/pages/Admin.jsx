import React from "react";
import { useState } from "react";
import '../styles/Admin.css';

import Titulo from "../componentes/Titulo";
import Clients from "../assets/DataStatic/DataClients";
import DadosUsers from "../componentes/DadosUsers";
import General from "../assets/DataStatic/DataGeneral";
import DadosLivros from "../componentes/DadosLivros";
import BotaoPri from "../componentes/BotaoPri";


function Admin(){
    const [form, setform] = useState(false);
    const [pesquisa, setpesquisa] = useState('');
    const [pesquisaUser, setpesquisaUser] = useState('');

    const LowercasePesquisa = typeof pesquisa === 'string' ? pesquisa.toLocaleLowerCase() : '';
    const livros = General.filter( l => l.titulo.toLocaleLowerCase().includes(LowercasePesquisa) || l.autor.toLocaleLowerCase().includes(LowercasePesquisa))
// 
    const LowercasePesquisaUser = typeof pesquisaUser === 'string' ? pesquisaUser.toLocaleLowerCase() : '';
    const usuarios = Clients.filter( c => c.nome.toLocaleLowerCase().includes(LowercasePesquisaUser) || c.email.toLocaleLowerCase().includes(LowercasePesquisaUser))

function Showform(){
        setform(!form);
    }

    return(
        <div>
            <div className={`AlterUserModalLivro  ${form ? 'ShowLivro' : ''}`} >
            <button style={{top: '-10px'}} className="x" onClick={() => { Showform() }} > X </button>
            <div className={`UpdateUser`}>
                <h1>Adicionar Livro</h1>
                
                <form>
                    <label htmlFor="tituloC">Titulo: </label>
                    <input type="text" name="tituloC" id="tituloC" required />
                    
                    <label htmlFor="autorC">Autor: </label>
                    <input type="text" name="autorC" id="autorC" required />

                    <label htmlFor="dataPubliC">Data Publicação: </label>
                    <input type="text" name="dataPubliC" id="dataPubliC" required />

                    <label htmlFor="precoC">Preço: </label>
                    <input type="number" min={0} step={0.01} name="precoC" id="precoC" required />

                    <label htmlFor="quantidadeC">Quantidade em estoque: </label>
                    <input type="number" name="quantidadeC" id="quantidadeC" required />

                    <label htmlFor="descricoC">Descrição: </label>
                    <input type="text" name="descricaoC" id="descricaoC" required />

                    <label htmlFor="resumoC">Resumo: </label>
                    <textarea name="resumoC" id="resumoC" required />

                    <button>Adicionar</button>
                </form>
                
            </div>
            </div>

            <Titulo title='Área de Gerenciamento'  />
            <div className="Gerenciamento">
                <div className="Geren_Clientes">
                    <Titulo title='Usuários' />
                    <input className="InputPesquisa" placeholder="&#8981;" type="text" id="pesquisa" name="pesquisa" value={pesquisaUser} onChange={(e) => setpesquisaUser(e.target.value)} />
                    <DadosUsers data={usuarios}/>   

                </div>
                <span className="Line">

                </span>
                <div className="Geren_Livros">
                    <Titulo title='Livros' />
                    <BotaoPri label='Adicionar livro' Click={() => { Showform() }} />
                        {/* <h1 > &#8981; </h1> */}
                    <input className="InputPesquisa" placeholder="&#8981;" type="text" id="pesquisa" name="pesquisa" value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} />
                    <DadosLivros data={livros} />
                </div>
            </div>
        </div>
    );
};

export default Admin;