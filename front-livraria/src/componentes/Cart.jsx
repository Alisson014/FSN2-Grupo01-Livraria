import React, { useState } from 'react';
import ProductList from './Productlist'; // Importando o componente ProductList
import BotaoPri from './BotaoPri';

import { useSelector, useDispatch } from 'react-redux'; 
import { adicionar, remover } from '../context/CarrinhoSlice';

const Cart = () => {
  // const [cart, setCart] = useState([]);
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Produto A',
  //     description: 'Descrição do Produto A',
  //     price: 20.99,
  //     image: 'https://via.placeholder.com/200',
  //   },
  //   {
  //     id: 2,
  //     name: 'Produto B',
  //     description: 'Descrição do Produto B',
  //     price: 15.99,
  //     image: 'https://via.placeholder.com/200',
  //   },
  //   {
  //     id: 3,
  //     name: 'Produto C',
  //     description: 'Descrição do Produto C',
  //     price: 30.50,
  //     image: 'https://via.placeholder.com/200',
  //   },
  // ];

  // const handleAddToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  //   alert(`${product.name} foi adicionado ao carrinho!`);
  // };


  const cart = useSelector((state) => state.carrinho.produtos );
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((cad) => (
        <BotaoPri Click={ () => dispatch(remover(cad)) } ></BotaoPri>
      ) )}
      <h1>Minha Loja</h1>
      {/* <ProductList products={products} onAddToCart={ () => dispatch(adicionar()) } /> */}
      <div>
        <h3>Carrinho de Compras</h3>
        <p>Itens no carrinho: {cart.length}</p>
        
          <ProductList products={cart} onAddToCart={ () => dispatch(remover()) } />
        
      </div>
    </div>
  );
};

export default Cart;