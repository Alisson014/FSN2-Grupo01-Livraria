import React from "react";
import '../styles/ViewDadosUser.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import General from "../assets/DataStatic/DataGeneral";
import Titulo from "../componentes/Titulo";
import BotaoPri from "../componentes/BotaoPri";
import BotaoVoltar from "../componentes/BotaoVoltar";


function ViewDadosLivros(){
    const params = useParams();
    const [livro, setlivro] = useState([]);
    const [formData, setformData] = useState({titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''});

    // const livro = General.find((l) => { return l.id === Number(params.id) });{titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''}
    

    const [form, setform] = useState(false);
    function ShowEdit(){
        setform(!form);
        // setformData(livro);
        console.log( formData.autor,  Number(formData.quantidade_estoque));
    }

    useEffect(() => {
        fetchLivro(Number(params.id));
    }, [params.id]);

    // useEffect(() => {
    //     handleInputChange();
    // }, []);

    const fetchLivro = async (id) => {
        try {
            const response = await fetch(`/api/livros/${id}`); 
            const data = await response.json();
            setlivro(data);
            setformData(data);
            
        } catch (error) {
            console.error('Erro ao buscar livros', error);
        }
    };


    const handleInputChange = (e) => {
        // e.preventDefault();
        setformData({ ...formData, [e.target.name]: e.target.value });
        console.log( e.target.value);
        console.log( e.target.name);
        console.log( formData.autor,  Number(formData.quantidade_estoque));
    };

    const handleSubmit = async (e) => {
        handleInputChange(e);
        e.preventDefault();
        // setid_cliente(4);|| !formData.data_publicacao
      
        if (!formData.titulo || !formData.autor || !formData.preco || !formData.quantidade_estoque || !formData.descricao || !formData.resumo || !formData.categoria  || !formData.imagem_capa){
          alert(`'Todos os campos são obrigatórios',  ${formData.titulo}, ${formData.autor}, ${formData.preco}, ${formData.quantidade_estoque}, ${formData.descricao}, ${formData.resumo}, ${formData.categoria}, ${formData.data_publicacao}, ${formData.imagem_capa}`);
          return;	
        }
        // console.log(`'Todos os campos são obrigatórios', ${nome}, ${id_cliente}, ${comentario}`);
        
        // const novoLivro = {
        //   titulo,
        //   autor,
        //   preco,
        //   quantidade_estoque,
        //   descricao,
        //   resumo,
        //   categoria,
        //   data_publicacao,
        //   imagem_capa,
        // }
      
        try {
            await fetch(`/api/livros/${livro.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            
            fetchLivro(livro.id);
            alert('Livro atualizado com sucesso');
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          } finally{
            setformData(livro);
          }
   
    };

    

    return(
        <div>    
        <div>
        <div className={`AlterUserModalLivro  ${form ? 'ShowLivro' : ''}`} >
            <button style={{top: '-10px'}} className="x" onClick={() => { ShowEdit() }} > X </button>
            <div className={`UpdateUser`}>
                <h1>Atualizar Livro</h1>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="imagemE">Imagem: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.imagem_capa}
                     type="text" id="imagemE" name="imagem_capa" placeholder="Digite a URL da imagem" required/>   

                    <label htmlFor="tituloE">Titulo: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.titulo}
                     type="text" name="titulo" id="tituloE" required />

                    <label htmlFor="categoriaE">Categoria: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.categoria}
                     type="text" name="categoria" id="categoriaE" required />
                    
                    <label htmlFor="autorE">Autor: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.autor}
                     type="text" name="autor" id="autorE" required />

                    {/* <label htmlFor="dataPubliE">Data Publicação: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.data_publicacao}
                     type="date" name="data_publicacaoEdit" id="dataPubliE" required /> */}

                    <label htmlFor="precoE">Preço: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.preco}
                     type="number" min={0} step={0.01} name="preco" id="precoE" required />

                    <label htmlFor="quantidadeE">Quantidade em estoque: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.quantidade_estoque} 
                    type="number" name="quantidade_estoque" id="quantidadeE" required />

                    <label htmlFor="descricoE">Descrição: </label>
                    <input onChange={ handleInputChange } defaultValue={livro.descricao}
                     type="text" name="descricao" id="descricaoE" required />

                    <label htmlFor="resumoE">Resumo: </label>
                    <textarea onChange={ handleInputChange } defaultValue={livro.resumo}
                     name="resumo" id="resumoE" required />

                    <button onClick={ () => { ShowEdit() } } >Atualizar</button>
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
                        <img src={livro.imagem_capa} alt={`Imagem Livro ${livro.titulo}`} />
                        <div><p>Id:</p>  <strong>{ livro.id }</strong> </div>
                        <div><p>Título:</p>  <strong>{ livro.titulo }</strong> </div>
                        <div><p>Autor:</p> <strong>{ livro.autor }</strong>  </div>
                        <div><p>Data de Publicação:</p> <strong>{ String(livro.data_publicacao).slice(0,10) }</strong> </div>
                        <div><p>Preço: </p> <strong>R${ livro.preco }</strong> </div>
                        <div><p>Quantidade Estoque:</p> <strong>{ livro.quantidade_estoque }</strong> </div>
                        <div><p>Descrição:</p> <strong>{ livro.descricao }</strong> </div>
                        <div><p>Criado em:</p> <strong>{ String(livro.createdAt).slice(0,10) }</strong> </div>
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