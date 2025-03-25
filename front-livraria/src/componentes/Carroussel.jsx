import React from "react";
import { useParams } from "react-router-dom";
import CardLivro from "./CardLivro";
import Titulo from "./Titulo";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   
import '../styles/Carroussel.css';


import { useSelector, useDispatch } from 'react-redux'; 
import { adicionar } from '../context/CarrinhoSlice';



function Carroussel({Data, titulo}){
    const params = useParams(); 
    const cart = useSelector((state) => state.carrinho.produtos );
    const dispatch = useDispatch();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", filter: "invert(100%)", transform: "scale(2) translateX(-20px)", opacity: "0.5" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", filter: "invert(100%)", transform: "scale(2) translateX(-10px)", opacity: "0.5" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    

    return(
        <div className="t" >
            <br/>
            <br/> 
            <Titulo title={titulo} />
        <div className="conteiner">
            
        <div className="slider">
            <Slider {...settings}>
              
                {Data.map((d) => (
                  
                    <CardLivro className="cardC"
                        key={d.id}
                        idL={d.id}
                        idC={params.idC}
                        titulo={d.titulo}
                        descricao={d.descricao}
                        imagem={d.imagem_capa}
                        preco={d.preco}
                        // book={d}

                        // onAddToCart={ () => dispatch(adicionar())}
                    />
                    
                ))}
                
            </Slider>
                
        </div>
        </div>
        </div>
    );
}


export default Carroussel;