import React from "react";
import { useState, useEffect } from "react";
import '../styles/ShopCart.css';

import SomeBooks from "../assets/DataStatic/DataSomeBooks";
import BotaoPri from "./BotaoPri";
import ProductList from "./Productlist";

import { useSelector, useDispatch } from 'react-redux'; 
import { remover } from '../context/CarrinhoSlice';

function ShopCart({ classN }){
    const [total, settotal] = useState(0);
    const [idlivros, setidlivros] = useState('');
    const [titulos, settitulos] = useState('');
    // const [quantidade, setquantidade] = useState(1);
    // function ComprarMenos(){
    //     if(quantidade === 1){
    //         setquantidade(1)
    //     } else{
    //         setquantidade(quantidade-1);
    //     }
    // }

    // function ComprarMais(){
    //     setquantidade(quantidade+1);
    // }
    const cart = useSelector((state) => state.carrinho.produtos );
    const dispatch = useDispatch();

    useEffect(() => {
            updatetotal(cart);
        }, [cart]);
        function updatetotal(cart){
            let s = 0;
            let l = '';
            let t = '';
            cart.forEach( c => {
                s += c.payload.preco;
                l += c.payload.id;
                t += c.payload.titulo;
            });
            setidlivros(l);
            settotal(s);
            settitulos(t);
        }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/vendas', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cart),
            });
            
          } catch (error) {
            console.error('Erro ao adicionar livro', error);
          }
    }

    return(
        <div className={classN}>
            {/*<div className="ScrollContent">
                 <div className="CardLivroshop">
                    <div className="ImagemLivrocar">
                        <img src={SomeBooks[1].imagem} alt={`Imagem Livro ${SomeBooks[1].titulo}`} />
                        <span>
                            <svg onClick={() => ComprarMais()}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>

                            <svg onClick={() => ComprarMenos()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                            </svg>

                            
                        </span>
                    </div>
                    <div className="Descricao" >
                        <h1> {SomeBooks[1].titulo} </h1>
                        <div style={{display: 'flex'}} >
                            <p>R$ {SomeBooks[1].preco} </p> &nbsp; - &nbsp; 
                            
                            Livros: &nbsp; <input className="Quantidade" type="number" name="quantidade" min={1} defaultValue={1} />
                            
                            
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </div>
                </div>     
            </div>*/}
            <ProductList products={cart} onAddToCart={ () => dispatch(remover()) } />

            
        
            <div className="FinalizarCompra" >
                <h3 style={{color: "white"}} >Total: R$ {total.toFixed(2)} </h3>
                <BotaoPri label='Finalizar Compra' />
            </div>

        </div>
    );
};

export default ShopCart;