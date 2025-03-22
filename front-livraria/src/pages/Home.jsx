import React from "react";
import '../styles/Home.css';


import HeroInicial from "../componentes/HeroInicial";
import CardInfo from "../componentes/CardInfo";
import Coments from "../componentes/Coments";
import Titulo from "../componentes/Titulo";
// import CardLivro from "../componentes/CardLivro";
import AddComent from "../componentes/AddComentModal";
import LatestBooks from "../componentes/LatestBooks";
import Categorias from "../componentes/Categorias";

import img from '../assets/images/img';
import ComentsData from "../assets/DataStatic/DataComents";
import SomeBooks from '../assets/DataStatic/DataSomeBooks';


function Home(){

    

    return(
        <div>
            <HeroInicial
                imagemB={img.HeroImg}
                titulo='Ressonância Literária'
                texto='Todos os livros que você pode sonhar a um simples click de distância. Entre de corpo e alma por entre os mais diversos universos que aqui encontrar'
                
            />

            
            <Titulo title='Nossos livros mais recentes' />
            
            <LatestBooks livros={SomeBooks}  />

            <Categorias />

            <Coments Data={ComentsData} />
            <br/><br/>
            <AddComent  />
            <br/>

            <div className="cards-info">
                <CardInfo
                    img={img.IconCardInfo1}
                    title="Recursos"
                    text="Nossa página está repleta de funcionalidades que visam o melhor para os usuários, além disso, presamos muito pelo estado dos livros"
                    label="Saiba Mais"
                />

                <CardInfo
                    img={img.IconCardInfo2}
                    title="Público"
                    text="Livros para todas as idades e gostos. Maior facilidade e segurança para os pais no cuidado com o conteúdo visto pelos filhos"
                    label="Saiba Mais"
                />

                <CardInfo
                    img={img.IconCardInfo3}
                    title="E-Books"
                    text="Para aqueles que desejam o livro o mais depressa possível ou para aqueles que querem encontrar o precinho mais em conta ainda"
                    label="Saiba Mais"
                />
            </div>


        </div>
    );
}

export default Home;

