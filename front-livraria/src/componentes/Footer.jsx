import React from "react";
import '../styles/Footer.css';

function Footer({title, text, Data}){
    return(
        <footer className="Footer">
            <h1>{title}</h1>
            <p> &#10077; {text} &#10078;</p>
            <span>
                
                {Data.map((d) => (
                    
                    // <img key={d.id} src={d.img} alt={d.alt}/>
                    
                    <svg key={d.id}  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path d={d.path}/>
                    </svg>
                ))}
            </span>
        </footer>
    );
}

export default Footer;