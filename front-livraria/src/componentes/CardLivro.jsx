import React from "react";
import img from '../assets/images/img';
import '../styles/CardLivro.css';


import { Link } from "react-router-dom";



function CardLivro({titulo, descricao, preco, imagem, idL, idC}){
    // const valor = useSelector((state) => state.id.valor);
    // const dispatch = useDispatch();
// onClick={Onclick}, Onclick
    return(
        <div className="card" > 
            <Link to={`/Home/${idC}/Livro/${idL}`} className="LinkCard">           
                <div className="cabecalho">
                    <img src={imagem} alt="Imagem Livro"/>
                </div>
            </Link> 
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <p>{descricao}</p>
            <br/>
            <Link to={`/Home/${idC}/Livro/${idL}`} className="LinkCard">
                <button>R$ {preco} <img src={img.AddToCart} alt="Icone shopping cart" /> </button>
            </Link>
            <br/>
            <br/>
        </div>
    );
}

export default CardLivro;