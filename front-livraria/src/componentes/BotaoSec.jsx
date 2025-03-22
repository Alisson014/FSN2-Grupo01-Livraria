import React from "react";
import '../styles/BotaoSec.css';

function BotaoSec({label, Click}){
    return(
        <button className="BotaoSecundario" onClick={Click} >{label}</button>
    );
};

export default BotaoSec;