import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Pesquisa from './pages/Pesquisa';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ValidarAdmin from './pages/ValidarAdmin';
import ViewDadosUser from './pages/ViewDadosUser';
import Livro from './pages/Livro';
import ViewDadosLivros from './pages/ViewDadosLivros';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import EndLine from './componentes/EndLine';
import './App.css';

// import img from './assets/images/img';
import Cart from './componentes/Cart';
// import ProductList from './componentes/Productlist';
import SomeBooks from './assets/DataStatic/DataSomeBooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Cart/> } />
          <Route path='/Home/:idC' element={ <Home/> } />
          <Route path='/Home/:idC/Pesquisar' element={ <Pesquisa/> } />
          <Route path='/Home/:idC/Livro/:idL' element={ <Livro/> } />
          <Route path='/admin' element={ <Admin/> } />
          <Route path='/Validar' element={ <ValidarAdmin/> } />
          <Route path='/admin/usuario/:id' element={ <ViewDadosUser/> } />
          <Route path='/admin/livro/:id' element={ <ViewDadosLivros/> } />
        </Routes>
        
        <EndLine 
          empresa='Ressonância Literária'
        />
      </Router>
    </div>
  );
}


export default App;
