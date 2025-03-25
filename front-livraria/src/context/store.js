import { configureStore } from '@reduxjs/toolkit';
import CarrinhoReducer from './CarrinhoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    carrinho: CarrinhoReducer,
});


const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});