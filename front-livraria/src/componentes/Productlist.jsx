import React, { useState } from 'react';
import './Productlist.css'; // Arquivo de estilo
import '../styles/ShopCart.css';

{/* <div key={product.id} className="product-item">
            <img src={product.image} alt={product.titulo} />
            <div className="product-info">
              <h3>{product.titulo}</h3>
              <p>{product.descricao}</p>
              <span className="price">${product.preco}</span>
            </div>
            <button onClick={() => onAddToCart(product)} className="add-to-cart">
              Adicionar ao Carrinho
            </button>
          </div>  <span>
                            <svg onClick={() => ComprarMais()}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>

                            <svg onClick={() => ComprarMenos()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                            </svg>

                            
</span> */}



                      
const ProductList = ({ products, onAddToCart }) => {
    
  console.log(products);
  return (
      <div className="ScrollContent">
        { products.map((product) => (
          <div className="CardLivroshop" key={product.payload.id} >
                    <div className="ImagemLivrocar">
                        <img src={product.payload.imagem_capa} alt={`Imagem Livro ${product.payload.titulo}`} />
                        
                    </div>
                    <div className="Descricao" >
                        <h1> {product.payload.titulo} </h1>
                        <div style={{display: 'flex'}} >
                            <p>Preço R$ {product.payload.preco} </p> &nbsp; &nbsp; 
                            <svg style={{marginTop: "4px"}} onClick={() => onAddToCart(product.payload)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                          </svg>
                            {/* Livros: &nbsp; <input className="Quantidade" type="number" name="quantidade" min={1} defaultValue={1} /> */}
                        </div>
                        
                    </div>
                </div>
        )) }
      </div>
  );
};

export default ProductList;
