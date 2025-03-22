import React from "react";
import { useState } from "react";
import '../styles/AddComentModal.css';

import BotaoPri from "./BotaoPri";

function AddComent(){
    const [IsVisible , setIsvisible] = useState(false);

    function Visibility(){
        setIsvisible(!IsVisible);
    }

    return(
        <div>
            <div className={`ModalAddComent ${ IsVisible ? 'ShowModal' : '' }`}>
                <button className="CloseButton" type="button" onClick={ () => {Visibility()} } > X </button>
                <form method="post">
                    <label htmlFor='nome'>Nome: </label>
                    <input id="nome" name="nome" type="text" required />
                    <label htmlFor="comentario" >Comentário: </label>
                    <textarea rows={5} id="comentario" name="comentario" maxLength={220} required/>
                    <br/>
                    <BotaoPri  label="Comentar" />
                </form>
            </div>

            <BotaoPri Click={ () => {Visibility()} }  label='&nbsp; &nbsp;  Comentar  &nbsp; &nbsp;' />
        </div>
    );
};

export default AddComent;