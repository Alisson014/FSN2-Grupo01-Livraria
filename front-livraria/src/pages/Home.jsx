import React from "react";
import { useState, useEffect } from "react";
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


import { fetchComentarios, adicionarComentario } from "../services/comentarioService";

function Home(){
    const [comentarios, setcomentarios] = useState([]);
        const [id_cliente, setid_cliente] = useState(1);
        const [nome, setnome] = useState('');
        const [comentario, setcomentario] = useState('');
    
    const [mensageiro, setmensageiro] = useState(false);
    const [mensagem, setmensagem] = useState('');

    // useEffect( () => {
    //     const carregarComentarios = async () => {
    //         try{
    //             const response = await fetchComentarios();
    //             // console.log(comentarios);
    //             setcomentarios( await response.data);
    //         } catch(error){
    //             setmensagem('Erro ao buscar comentários');
    //         }
    //     };
    //     carregarComentarios();
    // }, []);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setid_cliente(4);
      
        if (!nome || isNaN(id_cliente) || !comentario){
          alert(`'Todos os campos são obrigatórios', ${nome}, ${id_cliente}, ${comentario}`);
          return;	
        }
        // console.log(`'Todos os campos são obrigatórios', ${nome}, ${id_cliente}, ${comentario}`);
        
        const novoComentario = {
          id_cliente,
          nome,
          comentario,
        }
      
        try {
            await fetch('/api/comentarios', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({id_cliente, nome, comentario}),
            });
            
            fetchComentarios();
          } catch (error) {
            console.error('Erro ao comentar', error);
          }
      
        setnome('');
        setcomentario('');
        setid_cliente(1); //Alterar depois
    }


    useEffect(() => {
        fetchComentarios();
    }, []);

    const fetchComentarios = async () => {
    try {
        const response = await fetch('/api/comentarios'); 
        const data = await response.json();
        setcomentarios(data);
    } catch (error) {
        console.error('Erro ao buscar livros', error);
    }
    };    


    const [IsVisible , setIsvisible] = useState(false);

    function Visibility(){
        setIsvisible(!IsVisible);
    }

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

            <Coments Data={comentarios.reverse()} />
            <br/><br/>
            <AddComent 
                nome={nome}
                comentario={comentario}
                handleSubmit={handleSubmit}
                setnome={setnome}
                setcomentario={setcomentario}
                IsVisible={IsVisible}
                Visibility={Visibility}
            />
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

