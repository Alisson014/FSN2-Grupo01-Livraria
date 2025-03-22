import React from "react";
import { useState } from "react";
import '../styles/AlterUserModal.css';

function AlterUserModal({classN, disable}){
    
    const [form, setform] = useState('update');

    function Activer(){
        form === 'update' ? setform('delete') : setform('update');
    }
    

    return(
        <div className={classN}>
            <button className="x" onClick={disable} > X </button>
        
        <div className="AlterUserModal">
            
            <div className={`UpdateUser ${ form === 'update' ? 'ShowUpdate' : 'HideUpdate'}`}>
                <h1>Atualizar dados</h1>
                <p className="altform" onClick={ () => { Activer() } } > Deletar </p>
                <form>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder="De chamamento..." required/>

                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email"  required/>
                    
                    <label htmlFor="idade">Idade: </label>
                    <input type="number" min={14} name="idade" id="idade" required/>
                    
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="text" name="telefone" id="telefone" placeholder="(ddd) xxxx-xxxx" required  minLength={11}/>
                    
                    <label htmlFor="endereco">Endereço: </label>
                    <input type="text" name="endereco" id="endereco" placeholder="cep" required minLength={8} />

                    <button>Atualizar</button>
                </form>
                
            </div>

            <div className={`DeleteUser ${ form === 'delete' ? 'ShowDelete' : 'HideDelete'}`}>
                <h1>Deletar Conta</h1>
                <p className="altform" onClick={ () => { Activer() } } > Atualizar </p>
                <br/>
                <p>Esta ação não poderá ser defeita.</p>
                <br/>
                <form>
                    <label htmlFor="emailD">E-mail: </label>
                    <input type="email" name="emailD" id="emailD"  required/>

                    <label htmlFor="senha">Senha: </label>
                    <input type='password' id="senha" name="senha" required/>
                    
                    <button> Deletar </button>
                </form>
                <br/>
                
            </div>
        </div>
        </div>
    );
};

export default AlterUserModal;