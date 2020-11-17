import React from 'react';
import "./homee.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Brasill from "../../Assets/Fotos/bandeirabrasil.png"
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };



export default function NewHome(){
    return (
        <div>
            
            <Carousel  responsive={responsive}>
                <div className="starHome">Não </div>
                <div  className="starHome">home</div>
                <div  className="starHome">Item 3</div>
               
                
            </Carousel>;
            <p>preço </p>
        </div>
        
        
    )
}