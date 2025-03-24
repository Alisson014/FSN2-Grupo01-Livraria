import React from "react";
import { useState, useEffect } from "react";
import Carroussel from "./Carroussel";
import Titulo from "./Titulo";

// import General from "../assets/DataStatic/DataGeneral";
// const livros = General;

function Categorias(){
    const [livros, setlivros] = useState([]);
    useEffect(() => {
            fetchLivros();
        }, []);
        const fetchLivros = async () => {
        try {
            const response = await fetch('/api/livros/GetCategorias'); 
            const data = await response.json();
            setlivros(data);
        } catch (error) {
            console.error('Erro ao buscar livros', error);
        }
        };


    // var categorias = [livros[0].categoria];
    // livros.forEach((l) => {
    //     if (l.categoria !== categorias[categorias.length-1] && !(categorias.includes(l.categoria))){
    //         categorias.push(l.categoria);
    //     };
    // });
    // // console.log(categorias);   

    // var LivrosCategorias = []
    
    // categorias.forEach((c) => {
    //     var ls = [];
    //     livros.forEach((g) => {
    //         if (g.categoria === c){
    //             ls.push(g);
    //         }
    //     })

    //     LivrosCategorias.push(ls);
    // });
    // // console.log()

    return(
        <div>
            <br/><br/><br/>
            <Titulo title='Categorias' />
            {
                livros.map((l) => (
                    <Carroussel key={l[0].categoria}  titulo={l[0].categoria} Data={l} />
                ))
            }
        </div>
    );
};

export default Categorias;