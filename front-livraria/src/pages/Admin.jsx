import React from "react";
import { useState, useEffect } from "react";
import '../styles/Admin.css';

import EndLine from "../componentes/EndLine";
import Footer from "../componentes/Footer";
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
    // Livros
    const [livros, setlivros] = useState([]);
    const [formData, setformData] = useState({titulo: '', autor: '', preco: 0.0, quantidade_estoque: 0, descricao: '', resumo: '', categoria: '', data_publicacao: '', imagem_capa: ''});
    // Clientes
    const [clientes, setclientes] = useState([]);
    
    
    const LowercasePesquisa = typeof pesquisa === 'string' ? pesquisa.toLocaleLowerCase() : '';
    // const livros = General.filter( l => l.titulo.toLocaleLowerCase().includes(LowercasePesquisa) || l.autor.toLocaleLowerCase().includes(LowercasePesquisa))
// 
    const LowercasePesquisaUser = typeof pesquisaUser === 'string' ? pesquisaUser.toLocaleLowerCase() : '';
    const usuarios = Clients.filter( c => c.nome.toLocaleLowerCase().includes(LowercasePesquisaUser) || c.email.toLocaleLowerCase().includes(LowercasePesquisaUser))

    function Showform(){
        setform(!form);
    }
    
    // Livros
    const handleInputChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.titulo || !formData.autor || !formData.preco || !formData.quantidade_estoque || !formData.descricao || !formData.resumo || !formData.categoria || !formData.data_publicacao || !formData.imagem_capa){
          alert(`'Todos os campos são obrigatórios',  ${formData.titulo}, ${formData.autor}, ${formData.preco}, ${formData.quantidade_estoque}, ${formData.descricao}, ${formData.resumo}, ${formData.categoria}, ${formData.data_publicacao}, ${formData.imagem_capa}`);
          return;	
        }
        try {
            await fetch('/api/livros', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
            
            fetchLivros();
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          }
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

    /* Filtro Livros */
    const livrosF = livros.filter( l => l.titulo.toLocaleLowerCase().includes(LowercasePesquisa) || l.autor.toLocaleLowerCase().includes(LowercasePesquisa))
    

    // Clientes

    useEffect(() => {
            fetchClientes();
        }, []);
        const fetchClientes = async () => {
        try {
            const response = await fetch('/api/clientes'); 
            const data = await response.json();
            setclientes(data);
        } catch (error) {
            console.error('Erro ao buscar clientes', error);
        }
        };
    
        
    const handleDeleteC = async (id) => {
        if (window.confirm("Deseja mesmo remover este cliente? Está ação não poderá ser desfeita")) {
            try {
            await fetch(`/api/clientes/${id}`, {
                method: 'DELETE',
            });
            fetchClientes();
            alert('Cliente removido com sucesso');
            } catch (error) {
            console.error('Erro ao remover cliente', error);
            }
        }
        };

    /* Filtro Livros */
    const clientesF = clientes.filter( l => l.nome.toLocaleLowerCase().includes(LowercasePesquisaUser) || l.email.toLocaleLowerCase().includes(LowercasePesquisaUser))
    
    
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
                    type="number" min={0} name="quantidade_estoque" id="quantidadeC" required />

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
                    <DadosUsers data={clientesF} deleteL={ handleDeleteC } />   

                </div>
                <span className="Line">

                </span>
                <div className="Geren_Livros">
                    <Titulo title='Livros' />
                    <BotaoPri label='Adicionar livro' Click={() => { Showform() }} />
                        {/* <h1 > &#8981; </h1> */}
                    <input className="InputPesquisa" placeholder="&#8981;" type="text" id="pesquisa" name="pesquisa" value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} />
                    <DadosLivros data={livrosF} deleteL={ handleDelete } />
                </div>
            </div>
            <Footer 
                title='Ressonância Literária'
                text='Qualquer que sejam os seus sonhos ou universos de imaginação, aqui eles se tornam realidade com a nossa grandiosíssima infinidade de livros'
                Data={ [ { id: 1 , path: 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951'},
                        { id: 2 , path: 'M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232'},
                        { id: 3 , path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'},
                ] }
                />
            <EndLine 
                empresa='Ressonância Literária'
                />
        </div>
    );
};

export default Admin;