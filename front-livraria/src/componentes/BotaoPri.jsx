import React from "react";
import '../styles/BotaoPri.css';

function BotaoPri({label, Click}){
    return(
        <button className="buttonPrimary" onClick={Click} >{label}</button>
    );
};

export default BotaoPri;