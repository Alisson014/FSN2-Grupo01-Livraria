import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Login.css';

function Login(){
    const [cliente, setcliente] = useState([]);
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');

    useEffect(() => {
            fetchCliente(email);
        }, [email]);
    
        async function fetchCliente(id) {
            try {   
                const response = await fetch(`/api/clientes/${id}`); 
                const data = await response.json();
                setcliente(data);
                // setformData(data);
                

            } catch (error) {
                console.error('Erro ao buscar cliente', error);
            }
        };
        function Checker(){
            
            // alert( cliente.email,  cliente.senha, cliente);
            if(senha ===  cliente.senha && email ===  cliente.email){
                window.location.assign(`/Home/${ cliente.id}`);
            } else{
                alert("Dados incorretos");
                return;
            }
        }

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
            <div className="container">
            <div className="logo">
                <h1>RESSONÂNCIA LITERÁRIA</h1>
            </div>
            <h2>Login</h2>
            <form id="loginForm">
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input onChange={e => setemail(e.target.value)}  type="email" id="email" name="email" required/>
                </div> 
                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input onChange={ e => setsenha(e.target.value) }  type="password" id="password" name="password" required/>
                </div>
                <button onClick={ () => Checker() } type="button">Entrar</button>
                <p className="message">Não tem uma conta? <Link to={'/Cadastrar'}>Cadastre-se</Link></p>
            </form>
            
        </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Login;   