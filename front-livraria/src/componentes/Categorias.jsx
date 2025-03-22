import React from "react";

import Carroussel from "./Carroussel";
import Titulo from "./Titulo";

import General from "../assets/DataStatic/DataGeneral";


function Categorias(){
    var categorias = [General[0].categoria];
    General.forEach((l) => {
        if (l.categoria !== categorias[categorias.length-1] && !(categorias.includes(l.categoria))){
            categorias.push(l.categoria);
        };
    });
    // console.log(categorias);   

    var LivrosCategorias = []
    
    categorias.forEach((c) => {
        var ls = [];
        General.forEach((g) => {
            if (g.categoria === c){
                ls.push(g);
            }
        })

        LivrosCategorias.push(ls);
    });
    // console.log()

    return(
        <div>
            <br/><br/><br/>
            <Titulo title='Categorias' />
            {
                LivrosCategorias.map((l) => (
                    <Carroussel key={l[0].categoria}  titulo={l[0].categoria} Data={l} />
                ))
            }
        </div>
    );
};

export default Categorias;