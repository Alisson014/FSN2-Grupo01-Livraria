import React from "react";
import { useState } from "react";
import '../styles/AlterUserModal.css';

function AlterUserModal({ senhaV, emailV, senha, setsenha, id, classN, disable, nome, email, idade, telefone, endereco, setnome, setemail, setidade, settelefone, setendereco, form, ActiverF, submitUpdate, submitDelete}){

    function checker(e) {
        e.preventDefault();
        if ( senhaV === senha && email === emailV ){
            submitDelete(id);   
        }else{
            alert(`Dados Incorretos...`);
        } 
    }

    return(
        <div className={classN}>
            <button className="x" onClick={disable} > X </button>
        
        <div className="AlterUserModal">
            
            <div className={`UpdateUser ${ form === 'update' ? 'ShowUpdate' : 'HideUpdate'}`}>
                <h1>Atualizar dados</h1>
                <p className="altform" onClick={ () => { ActiverF() } } > Deletar </p>
                <form onSubmit={submitUpdate}>
                    <label htmlFor="nome">Nome: </label>
                    <input onChange={(e) => setnome(e.target.value)} value={nome}
                     type="text" name="nome" id="nome" placeholder="De chamamento..." required/>

                    <label htmlFor="email">E-mail: </label>
                    <input onChange={(e) => setemail(e.target.value)} value={email}
                     type="email" name="email" id="email"  required/>
                    
                    <label htmlFor="idade">Idade: </label>
                    <input onChange={(e) => setidade(e.target.value)} value={Number(idade)}
                     type="number" min={14} name="idade" id="idade" required/>
                    
                    <label htmlFor="telefone">Telefone: </label>
                    <input onChange={(e) => settelefone(e.target.value)} value={telefone}
                     type="text" name="telefone" id="telefone" placeholder="(ddd) xxxx-xxxx" required  minLength={11}/>
                    
                    <label htmlFor="endereco">Endereço: </label>
                    <input onChange={(e) => setendereco(e.target.value)} value={endereco}
                     type="text" name="endereco" id="endereco" placeholder="cep" required minLength={8} />

                    <button type="submit" onClick={disable} >Atualizar</button>
                </form>
                
            </div>

            <div className={`DeleteUser ${ form === 'delete' ? 'ShowDelete' : 'HideDelete'}`}>
                <h1>Deletar Conta</h1>
                <p className="altform" onClick={ () => { ActiverF() } } > Atualizar </p>
                <br/>
                <p>Esta ação não poderá ser defeita.</p>
                <br/>
                <form onSubmit={ (e) => { checker(e) } }>
                    <label htmlFor="emailD">E-mail: </label>
                    <input onChange={(e) => setemail(e.target.value)}  type="email" name="emailD" id="emailD"  required/>

                    <label htmlFor="senha">Senha: </label>
                    <input onChange={(e) => setsenha(e.target.value)} type='password' id="senha" name="senha" required/>
                    
                    <button onClick={disable} > Deletar </button>
                </form>
                <br/>
                
            </div>
        </div>
        </div>
    );
};

export default AlterUserModal;