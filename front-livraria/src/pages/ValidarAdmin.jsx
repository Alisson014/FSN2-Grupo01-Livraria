import React from "react";
// import { useState } from "react";
import '../styles/AlterUserModal.css';

function ValidarAdmin(){

    // const [form, setform] = useState(true);s
    
    // function Activer(){
    //     setform(!form);
    // }
// ${ form ? 'ShowDelete' : 'HideDelete'}
    return(
        <div style={ { width: '100%', height: '400px', display: 'flex', justifyContent: 'center',alignItems: 'center' } } >
        <div style={{width: '320px', border: '1px solid #00000044', padding: '8px', borderRadius: '5px'}}>
            <div className={`DeleteUser `}>
                    <h1>Área Restrita</h1>
                    <br/>
                    <form>
                        <label htmlFor="emailadmin">E-mail: </label>
                        <input type="email" name="emailadmin" id="emailadmin"  required/>

                        <label htmlFor="senhaadmin">Senha: </label>
                        <input type='password' id="senhaadmin" name="senhaadmin" required/>
                    </form>
                    <br/>
                    <button> Entrar </button>
                </div>
            </div>
            </div>    
    );
};

export default ValidarAdmin;