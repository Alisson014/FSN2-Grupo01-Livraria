import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/AlterUserModal.css';
import BotaoPri from "../componentes/BotaoPri";
import EndLine from "../componentes/EndLine";

function Cadastro(){
    const [cliente, setcliente] = useState([]);;
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [idade, setidade] = useState(0);
    const [telefone, settelefone] = useState('');
    const [endereco, setendereco] = useState('');
    const [senha, setsenha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCliente(email);
    }, [email]);
    useEffect(() => {
        NextPage(cliente);
    }, [cliente]);
    function NextPage(cliente){
        if(cliente.id !== undefined){
            window.location.assign(`/Home/${cliente.id}`);
        }
    }
    

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!nome || !email || !idade || !telefone || !endereco || !senha){
          alert(`'Todos os campos são obrigatórios'`);
          return;	
        }
        try {
            await fetch('/api/clientes', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ nome, email, idade: Number(idade), telefone, endereco, senha }),
            });
            
            fetchCliente(email);
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          }
    }

    return(
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
            <BotaoPri label={'Voltar'} Click={ () => navigate(-1) } />
            <br/>
            <div style={{width: "40%", minWidth: "280px", border: '1px solid #00000033', borderRadius: "10px", padding: "20px", boxShadow: '0px 0px 10px #00000022'}} >
            <div className={`UpdateUser`}>
                <h1>Cadastrar Conta</h1>
                <form onSubmit={ handleSubmit } >
                    <label htmlFor="nome">Nome: </label>
                    <input onChange={(e) => setnome(e.target.value)} 
                     type="text" name="nome" id="nome" placeholder="De chamamento..." required/>

                    <label htmlFor="email">E-mail: </label>
                    <input onChange={(e) => setemail(e.target.value)} 
                     type="email" name="email" id="email"  required/>
                    
                    <label htmlFor="idade">Idade: </label>
                    <input onChange={(e) => setidade(e.target.value)} 
                     type="number" min={14} name="idade" id="idade" required/>
                    
                    <label htmlFor="telefone">Telefone: </label>
                    <input onChange={(e) => settelefone(e.target.value)} 
                     type="text" name="telefone" id="telefone" placeholder="(ddd) xxxx-xxxx" required  minLength={11}/>
                    
                    <label htmlFor="endereco">Endereço: </label>
                    <input onChange={(e) => setendereco(e.target.value)} 
                     type="text" name="endereco" id="endereco" placeholder="cep" required minLength={8} />

                    <label htmlFor="senha">Senha: </label>
                    <input onChange={(e) => setsenha(e.target.value)} 
                     type="password" name="senha" id="senha" required/>


                    <button type="submit" > Cadastrar </button>
                </form>
                
            </div>
            </div>
            <br/>
        </div>
    );
}

export default Cadastro;