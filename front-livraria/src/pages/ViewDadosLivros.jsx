import React from "react";
import '../styles/ViewDadosUser.css';
import { useParams } from "react-router-dom";
import { useState } from "react";

import General from "../assets/DataStatic/DataGeneral";
import Titulo from "../componentes/Titulo";
import BotaoPri from "../componentes/BotaoPri";
import BotaoVoltar from "../componentes/BotaoVoltar";


function ViewDadosLivros(){
    const params = useParams();
    const livro = General.find((l) => { return l.id === Number(params.id) });

    const [form, setform] = useState(false);
    function ShowEdit(){
        setform(!form);
    }

    return(
        <div>    
        <div>
        <div className={`AlterUserModalLivro  ${form ? 'ShowLivro' : ''}`} >
            <button style={{top: '-10px'}} className="x" onClick={() => { ShowEdit() }} > X </button>
            <div className={`UpdateUser`}>
                <h1>Atualizar Livro</h1>
                
                <form>
                    <label htmlFor="titulo">Titulo: </label>
                    <input type="text" name="titulo" id="titulo" required defaultValue={livro.titulo}/>
                    
                    <label htmlFor="autor">Autor: </label>
                    <input type="text" name="autor" id="autor" required defaultValue={livro.autor}/>

                    <label htmlFor="dataPubli">Data Publicação: </label>
                    <input type="text" name="dataPubli" id="dataPubli" required defaultValue={livro.data_publicacao}/>

                    <label htmlFor="preco">Preço: </label>
                    <input type="number" min={0} step={0.01} name="preco" id="preco" required defaultValue={livro.preco}/>

                    <label htmlFor="quantidade">Quantidade em estoque: </label>
                    <input type="number" name="quantidade" id="quantidade" required defaultValue={livro.quantidade_estoque}/>

                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" name="descricao" id="descricao" required defaultValue={livro.descricao}/>

                    <label htmlFor="resumo">Resumo: </label>
                    <textarea name="resumo" id="resumo" required defaultValue={livro.resumo}/>

                    <button>Atualizar</button>
                </form>
                
            </div>
            </div>
        </div>

            <br/>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BotaoVoltar />
            </div>
            <Titulo title='Dados do Livro' />
            
            <p className="textoP"> Aqui constam dados acerca dos livros cadastrados </p>
            <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div className={`UserDadosModal`} key={livro.id}>
                        <img src={livro.imagem} alt={`Imagem Livro ${livro.titulo}`} />
                        <div><p>Id:</p>  <strong>{ livro.id }</strong> </div>
                        <div><p>Título:</p>  <strong>{ livro.titulo }</strong> </div>
                        <div><p>Autor:</p> <strong>{ livro.autor }</strong>  </div>
                        <div><p>Data de Publicação:</p> <strong>{ livro.data_publicacao }</strong> </div>
                        <div><p>Preço: </p> <strong>R${ livro.preco }</strong> </div>
                        <div><p>Quantidade Estoque:</p> <strong>{ livro.quantidade_estoque }</strong> </div>
                        <div><p>Descrição:</p> <strong>{ livro.descricao }</strong> </div>
                        <div style={{textAlign: 'justify'}}> <strong>{ livro.resumo }</strong> </div>
                        <BotaoPri label='Editar' Click={ () => { ShowEdit() } } />
                        {/* <p>Criado em: { livro.createdAt } </p> */}
                    </div>
                    
            </div>
            <br/><br/><br/>
        </div>
        
    );
};


export default ViewDadosLivros;