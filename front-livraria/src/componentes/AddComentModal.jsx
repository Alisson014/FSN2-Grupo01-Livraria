import React from "react";
import { useState } from "react";
import '../styles/AddComentModal.css';

import BotaoPri from "./BotaoPri";

function AddComent({handleSubmit, setnome, setcomentario, IsVisible, Visibility, nome, comentario}){
    

    return(
        <div>
            <div className={`ModalAddComent ${ IsVisible ? 'ShowModal' : '' }`}>
                <button className="CloseButton" type="button" onClick={ () => {Visibility()} } > X </button>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor='nome'>Nome: </label>
                    <input onChange={(e) => setnome(e.target.value)} value={nome}
                        id="nome" name="nome" type="text" required />
                    <label htmlFor="comentario" >Comentário: </label>
                    <textarea onChange={(e) => setcomentario(e.target.value)} value={comentario}
                        rows={5} id="comentario" name="comentario" maxLength={220} required/>
                    <br/>
                    <BotaoPri Click={() => {Visibility()}} label="Comentar" />
                </form>
            </div>

            <BotaoPri Click={ () => {Visibility()} }  label='&nbsp; &nbsp;  Comentar  &nbsp; &nbsp;' />
        </div>
    );
};

export default AddComent;