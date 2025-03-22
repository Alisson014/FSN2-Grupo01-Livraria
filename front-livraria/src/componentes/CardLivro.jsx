import React from "react";
import img from '../assets/images/img';
import '../styles/CardLivro.css';


// import { ReceberId } from "../context/getId";
// import { useDispatch, useSelector } from "react-redux";


function CardLivro({titulo, descricao, preco, imagem, id}){
    // const valor = useSelector((state) => state.id.valor);
    // const dispatch = useDispatch();
// onClick={Onclick}, Onclick
    return(
        <div className="card" > 
            <div className="cabecalho">
                <img src={imagem} alt="Imagem Livro"/>
            </div>
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <p>{descricao}</p>
            <br/>
            <button value={id}>R$ {preco} <img src={img.AddToCart} alt="Icone shopping cart" /> </button>
            <br/>
            <br/>
        </div>
    );
}

export default CardLivro;