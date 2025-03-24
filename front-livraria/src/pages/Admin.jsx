import React from "react";
import { useState, useEffect } from "react";
import '../styles/Admin.css';

import Titulo from "../componentes/Titulo";
import Clients from "../assets/DataStatic/DataClients";
import DadosUsers from "../componentes/DadosUsers";
import General from "../assets/DataStatic/DataGeneral";
import DadosLivros from "../componentes/DadosLivros";
import BotaoPri from "../componentes/BotaoPri";
import { data } from "react-router-dom";


function Admin(){
    const [form, setform] = useState(false);
    const [pesquisa, setpesquisa] = useState('');
    const [pesquisaUser, setpesquisaUser] = useState('');
    const [livros, setlivros] = useState([]);
    const [formData, setformData] = useState({titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''});
        // const [titulo, settitulo] = useState('');
        // const [autor, setautor] = useState('');
        // const [preco, setpreco] = useState(0.0);
        // const [quantidade_estoque, setquantidade_estoque] = useState(0);
        // const [descricao, setdescricao] = useState('');
        // const [resumo, setresumo] = useState('');
        // const [categoria, setcategoria] = useState('');
        // const [data_publicacao, setdata_publicacao] = useState();
        // const [imagem_capa, setimagem_capa] = useState('');

    const LowercasePesquisa = typeof pesquisa === 'string' ? pesquisa.toLocaleLowerCase() : '';
    // const livros = General.filter( l => l.titulo.toLocaleLowerCase().includes(LowercasePesquisa) || l.autor.toLocaleLowerCase().includes(LowercasePesquisa))
// 
    const LowercasePesquisaUser = typeof pesquisaUser === 'string' ? pesquisaUser.toLocaleLowerCase() : '';
    const usuarios = Clients.filter( c => c.nome.toLocaleLowerCase().includes(LowercasePesquisaUser) || c.email.toLocaleLowerCase().includes(LowercasePesquisaUser))

    function Showform(){
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
            await fetch('/api/livros', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            
            fetchLivros();
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          } finally{
            setformData({titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''});
          }
      
        // setautor('');
        // setcategoria('');
        // setdata_publicacao('');
        // setimagem_capa('');
        // setpreco(0.0);
        // setquantidade_estoque(0);
        // setresumo('');
        // settitulo('');
        
    }

    useEffect(() => {
            fetchLivros();
        }, []);
    
        const fetchLivros = async () => {
        try {
            const response = await fetch('/api/livros'); 
            const data = await response.json();
            setlivros(data);
        } catch (error) {
            console.error('Erro ao buscar livros', error);
        }
        };
    
        const livrosP = livros.filter( l => l.titulo.toLocaleLowerCase().includes(LowercasePesquisa) || l.autor.toLocaleLowerCase().includes(LowercasePesquisa))
    
        const handleDelete = async (id) => {
            if (window.confirm("Deseja remover este livro?")) {
              try {
                await fetch(`/api/livros/${id}`, {
                  method: 'DELETE',
                });
                fetchLivros();
                alert('Livro removido com sucesso');
              } catch (error) {
                console.error('Erro ao remover livro', error);
              }
            }
          };
    
    return(
        <div>
            <div className={`AlterUserModalLivro  ${form ? 'ShowLivro' : ''}`} >
            <button style={{top: '-10px'}} className="x" onClick={() => { Showform() }} > X </button>
            <div className={`UpdateUser`}>
                <h1>Adicionar Livro</h1>
                
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

                    <button onClick={ () => { Showform() } } >Adicionar</button>
                </form>
                
            </div>
            </div>

            <Titulo title='Área de Gerenciamento'  />
            <div className="Gerenciamento">
                <div className="Geren_Clientes">
                    <Titulo title='Usuários' />
                    <input className="InputPesquisa" placeholder="&#8981;" type="text" id="pesquisaUser" name="pesquisaUser" value={pesquisaUser} onChange={(e) => setpesquisaUser(e.target.value)} />
                    <DadosUsers data={usuarios}/>   

                </div>
                <span className="Line">

                </span>
                <div className="Geren_Livros">
                    <Titulo title='Livros' />
                    <BotaoPri label='Adicionar livro' Click={() => { Showform() }} />
                        {/* <h1 > &#8981; </h1> */}
                    <input className="InputPesquisa" placeholder="&#8981;" type="text" id="pesquisa" name="pesquisa" value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} />
                    <DadosLivros data={livrosP} deleteL={ handleDelete } />
                </div>
            </div>
        </div>
    );
};

export default Admin;