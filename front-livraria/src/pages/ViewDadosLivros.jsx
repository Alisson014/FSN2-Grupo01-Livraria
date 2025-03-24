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
    // setformData ({titulo: livro.titulo, autor: livro.autor, preco: Number(livro.preco), quantidade_estoque: Number(livro.quantidade_estoque), descricao: livro.descricao, resumo: livro.resumo, categoria: livro.categoria, data_publicacao: new Date(livro.data_publicacao).toLocaleDateString(), imagem_capa: livro.imagem_capa})
    // const livro = General.find((l) => { return l.id === Number(params.id) });
    

    const [form, setform] = useState(false);
    function ShowEdit(){
        setform(!form);
    }

    const handleInputChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setid_cliente(4);
      
        if (!formData.titulo || !formData.autor || !formData.preco || !formData.quantidade_estoque || !formData.descricao || !formData.resumo || !formData.categoria || !formData.data_publicacao || !formData.imagem_capa){
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
            await fetch(`/api/livros/${Number(params.id)}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            
            fetchLivro();
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          } finally{
            setformData({titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''});
          }
   
    }

    useEffect(() => {
        fetchLivro(Number(params.id));
    }, []);

    const fetchLivro = async (id) => {
        try {
            const response = await fetch(`/api/livros/${id}`); 
            const data = await response.json();
            setlivro(data);
        } catch (error) {
            console.error('Erro ao buscar livros', error);
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
                <label htmlFor="imagem">Imagem: </label>
                    <input onChange={handleInputChange } defaultvaluevalue={formData.imagem_capa}
                     type="text" id="imagem" name="imagem_capa" placeholder="Digite a URL da imagem" required/>   

                    <label htmlFor="tituloC">Titulo: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.titulo}
                     type="text" name="titulo" id="tituloC" required />

                    <label htmlFor="categoriaC">Categoria: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.categoria}
                     type="text" name="categoria" id="categoriaC" required />
                    
                    <label htmlFor="autorC">Autor: </label>
                    <input onChange={ handleInputChange } valdefaultvaluevalueue={formData.autor}
                     type="text" name="autor" id="autorC" required />

                    <label htmlFor="dataPubliC">Data Publicação: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.data_publicacao}
                     type="date" name="data_publicacao" id="dataPubliC" required />

                    <label htmlFor="precoC">Preço: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.preco}
                     type="number" min={0} step={0.01} name="preco" id="precoC" required />

                    <label htmlFor="quantidadeC">Quantidade em estoque: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.quantidade_estoque} 
                    type="number" name="quantidade_estoque" id="quantidadeC" required />

                    <label htmlFor="descricoC">Descrição: </label>
                    <input onChange={ handleInputChange } defaultvaluevalue={formData.descricao}
                     type="text" name="descricao" id="descricaoC" required />

                    <label htmlFor="resumoC">Resumo: </label>
                    <textarea onChange={ handleInputChange } defaultvaluevalue={formData.resumo}
                     name="resumo" id="resumoC" required />


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
                        <div><p>Data de Publicação:</p> <strong>{ livro.data_publicacao }</strong> </div>
                        <div><p>Preço: </p> <strong>R${ livro.preco }</strong> </div>
                        <div><p>Quantidade Estoque:</p> <strong>{ livro.quantidade_estoque }</strong> </div>
                        <div><p>Descrição:</p> <strong>{ livro.descricao }</strong> </div>
                        <div><p>Criado em:</p> <strong>{ livro.createdAt }</strong> </div>
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