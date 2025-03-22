import React, {useState} from "react";
import { General } from "../assets/DataStatic/DataGeneral";
import { Link } from "react-router-dom";
import '../styles/Pesquisa.css';

import CardLivro from "../componentes/CardLivro";
import Titulo from "../componentes/Titulo";


function Pesquisa(){
    const [pesquisa, setpesquisa] = useState('');

    const pesquisaLowerCase = typeof pesquisa === 'string' ? pesquisa.toLowerCase() : '';

    const livros = General.filter(livro => livro.titulo.toLowerCase().includes(pesquisaLowerCase) || livro.autor.toLocaleLowerCase().includes(pesquisaLowerCase) || livro.categoria.toLocaleLowerCase().includes(pesquisaLowerCase) );

    return(
        <div>
            <br/><br/>
            <Titulo title='Pesquise pelo seu próximo mundo' />
            <br/>
            <div className="Pesquisa">
                    <form>
                        <input value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} type="text" placeholder="Buscar Livros . . ."/>
                        <button type="button">  
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>    
                        </button>
                        {/* <button> <img src={iconPesquisa} alt="icon-pesquisas"/> </button> */}
                    </form>
                    
            </div>            
            
            <div className="Cards Hide">
                {livros.map((d) => (
                     <Link to={`/Livro/${d.id}`} key={d.id} className="LinkCard">
                     <CardLivro
                         key={d.id}
                         titulo={d.titulo}
                         descricao={d.descricao}
                         imagem={d.imagem}
                         preco={d.preco}
                     />
                    </Link>
                ))}
            </div>

            {/*  */}

            <div className={`Notfound ${livros.length === 0 ? 'Show' : ''}`}>
                
                <h1>Livro Não Encontrado...</h1>
                <span> ¯\_(ツ)_/¯ </span>
                
            </div>
        </div>
    );
}

export default Pesquisa;