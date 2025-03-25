import React from "react";
import { Link, useParams } from "react-router-dom";
// import '../styles/LatestBooks.css';{dispatch(ReceberId(d.id))}Onclick={() => }
import CardLivro from "./CardLivro";

import { useSelector, useDispatch } from 'react-redux'; 
import { adicionar } from '../context/CarrinhoSlice';

function LatestBooks({livros}){
    const params = useParams(); 
    const cart = useSelector((state) => state.carrinho.produtos );
    const dispatch = useDispatch();

    return(
            <div className="Cards">
                {livros.map((d) => (
                        <CardLivro
                            key={d.id}
                            idL={d.id}
                            idC={params.idC}
                            titulo={d.titulo}
                            descricao={d.descricao}
                            imagem={d.imagem_capa}
                            preco={d.preco}
                            // book={d}

                            // onAddToCart={ () => dispatch(adicionar()) }
                        />
                ))}
            </div>
    );
}

export default LatestBooks;