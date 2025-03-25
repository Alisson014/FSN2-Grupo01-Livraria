import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Header.css';

import img from '../assets/images/img';
import AlterUserModal from "./AlterUserModal";
import '../styles/AlterUserModal.css';
import '../styles/ShopCart.css';

import ShopCart from "./ShopCart";

function Header(){
    const [IsActive, setIsActive] = useState(false);
    function Activer(){
        setIsActive(!IsActive);
    }
    const [IsShopCart, setShopCart] = useState(false);
    function ActiverShopCart(){
        setShopCart( !IsShopCart );
    }
    const [form, setform] = useState('update');
    function ActiverF(){
        form === 'update' ? setform('delete') : setform('update');
    }

    const params = useParams();
    const [cliente, setcliente] = useState([]);;
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [idade, setidade] = useState(0);
    const [telefone, settelefone] = useState('');
    const [endereco, setendereco] = useState('');
    const [senha, setsenha] = useState('');

    useEffect(() => {
        fetchCliente(Number(params.id));
    }, [params.id]);

    const fetchCliente = async (id) => {
        try {   
            const response = await fetch(`/api/clientes/${id}`); 
            const data = await response.json();
      
            if ( !data.nome ) {
                window.location.assign('/');
            }
      
            setcliente(data);
            setnome(data.nome);
            setemail(data.email);
            setidade(data.idade);
            settelefone(data.telefone);
            setendereco(data.endereco);
            setsenha(data.senha); 

        } catch (error) {
            console.error('Erro ao buscar cliente', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!nome || !email || !idade || !endereco || !telefone){
          alert(`'Todos os campos são obrigatórios',  ${nome}, ${email}, ${idade}, ${telefone}, ${endereco}`);
          return;	
        }
        
        try {
            await fetch(`/api/clientes/${cliente.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({nome, email, idade, endereco, telefone}),
            });
            
            fetchCliente(cliente.id);
            alert('Dados atualizados com sucesso');
          } catch (error) {
            console.error('Erro na atualização', error);
          }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Realmente deseja deletar sua conta? Esta ação não poderá ser desfeita")) {
            try {
            await fetch(`/api/clientes/${id}`, {
                method: 'DELETE',
            });
            window.location.assign('/');
            } catch (error) {
            console.error('Erro ao remover livro', error);
            }
        }
    };
    

    return (
        <div>
        <header className="navbar">            
            <div className="menuLinks">
                <a href="/" style={{textDecoration: 'none'}}> 
                    <div className="logo">
                        <img src={ img.logo } alt="Logo-react"/>
                        <div className="Empresa">
                            <h1>Ressonância Literária</h1>
                        </div>
                    </div>
                </a>

            </div>

            <div id="MenuDesk" className="cont-buttons">
                <Link to={'/'}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                        </svg>
                    </button>
                </Link>
                
                <Link onClick={() => {Activer()}}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path style={{ fillRule: "evenodd" }} d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </button>
                </Link>
                
                <Link to={'/Pesquisar'}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </Link>

                <Link onClick={() => { ActiverShopCart() }}>
                    <button className="buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </button>
                </Link>

                
                
            </div>
        </header>

        <AlterUserModal 
        nome={nome}
        email={email}
        endereco={endereco}
        idade={idade}
        telefone={telefone}
        setnome={setnome}
        setemail={setemail}
        setidade={setidade}
        settelefone={settelefone}
        setendereco={setendereco}
        form={form}
        ActiverF={ActiverF}
        submitUpdate={handleSubmit}
        submitDelete={handleDelete}
        id={cliente.id}
        senha={senha}
        setsenha={setsenha}
        senhaV={cliente.senha}
        emailV={cliente.email}

        classN={`cModal  ${ IsActive ? 'ShowModalUser' : ''}`} disable={() => {Activer()}} />
        <ShopCart classN={ `ShopCart  ${ IsShopCart ? 'ShowShopCart' : ''}` } />
        </div>
    );
};


export default Header;