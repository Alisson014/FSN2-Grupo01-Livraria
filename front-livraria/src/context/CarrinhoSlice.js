import { createSlice } from '@reduxjs/toolkit';

const CarrinhoSlice = createSlice({
    name: "carrinho",
    initialState: { produtos: [] },
    reducers: {
        adicionar: (state, produto) => {
            // console.log(state.produtos);
            // let checker = Array(state.produtos);
            
            // if(state.produtos.includes(produto)) {
            //     // alert(checker.indexOf(produto));
            //     alert('Livro já está no carrinho');
            //     return;
            // } else {
                alert('Livro Adicionado ✔');
                state.produtos.push(produto);
            // }
        },
        remover: (state, produto) => {
            state.produtos.splice( state.produtos.indexOf(produto), 1);
            // alert('Livro Removido...');
        }
    }
});

export const { adicionar, remover } = CarrinhoSlice.actions;
export default CarrinhoSlice.reducer; 