import React from "react";
import '../styles/EndLine.css'

function EndLine({empresa}){
    return(
        <div className="Direitos">
            <p>&copy; {empresa} -  2025</p>
        </div>
    );
}

export default EndLine;