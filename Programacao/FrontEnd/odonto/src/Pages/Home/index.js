import React    from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Instagram from '../../Assets/Fotos/Instagram.svg'
import TT from '../../Assets//Fotos/ttlogo.svg'
import Facebook from '../../Assets/Fotos/facelogo.svg'
import Brasil from '../../Assets/Fotos/bandeirabrasil.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OneImg from '../../Assets/Fotos/1one.png'
import Dentista from '../../Assets/Fotos/dentistaONE.jpg'
import Dentee from '../../Assets/Fotos/denteONE.jpg'


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

export default function App() {
  return (
    <>
    <div className="Cont">
      
      <div className="header">
          <div className="Tt1Logo">
            <Link to="/"><h1 className="oogg">Odonto</h1></Link>
          </div>

          <div className="Tt2Home">
            <h5>O seu sorriso fica muito mais Lindo perto de nós, Dentistas, cuidando dele.</h5>
          </div>

          <div className="buttns">
          <Link to="/login"> <button className="bt1 btn btn-danger " > Logar</button></Link> 
          <Link to="/cadastrar"> <button className="bt2 btn btn-danger">Cadastrar</button></Link>
          </div>
      </div>
      <div>
        <Carousel  responsive={responsive}> 
          <div className="starHomeONEE">
            <p class="pDoCarrossel">Texto a ser colocado</p>
            <img src={Dentista} class="imgdentista" />
          </div>
          
          <div  className="starHomeTWOO"> 
            <img src={Dentee} class="imgdenteee"/>
            <p class="pDoCarrossel">Texto a ser colocado</p>
        </div>
          
          <div  className="starHome"> <p class="pDoCarrossel">Preenchimento de conteúdo</p>
        </div>
        </Carousel>
  </div> 


    <div className="divimg">
        <div>
          <a class="clinica btn btn-info" role="button"></a>
          <div className="onclink">Texto sobre a img</div>
    </div>
  
      <div>
        <a class=" clareamento btn btn-info" role="button"></a>
        <div className="onclink">Texto sobre a img</div>
    </div>
    
      <div>
        <a class=" proteses btn btn-info" role="button"></a>
        <div className="onclink">Texto sobre a img</div>
    </div>
    
      <div>
        <a class=" implante btn btn-info" role="button"></a>
        <div className="onclink">Texto sobre a img</div>
    </div>
  </div>

     
    <div class="Anucios">
        <div class="quadradoRight">
            <div className></div>
            <div></div>
      </div>
        <div class="rightMini">
          
      </div>   
  </div>
       <div class="AnuciosTwo">
          <div class="quadradoLeft">
            
        </div>
          <div class="LeftMini">
          
      </div>   
 </div>
         
      <div class="Nossocontato">
        <div class="NossocontatoTwo">
          <div class="armazenar">
              <p>Telefone</p>
              <p>e-mail</p>
              <p> mais alguma</p>
          </div>
        </div>
      </div>

</div>
  

   <div class="cont3">
        <div class="Box">
            <div class="Nav">
                <div class="logo2">
                    <Link class="linkOneOne" to = '/'><h1>Odonto</h1></Link>
                </div>
                <div class="g1">
                    <div class="l1">Empresa</div>
                    <div class="l"> <Link class="linkOneOne" to = '/sobrenos'>Sobre</Link></div>
                    <div class="l">Investidores</div>
                    <div class="l"> <a class="linkOneOne" href="https://domedica.com.br/"> Fornecedores </a></div>
                    
                </div>

                <div class="g2">
                    <div class="l1">Comunidade</div>
                    <div class="l"> <Link class="linkOneOne" to = '/sobredev'>Desenvolvedores</Link></div>
                    <div class="l">Marcas</div> 
                </div>

                <div class="g3">
                    <div class="l1">Links Úteis</div>
                    <div class="l"><Link class="linkOneOne"to='/Devapp' >Aplicativo móvel em desenvolvimento</Link></div>
                    <div class="l"><Link class="linkOneOne"to='/'>Referências</Link></div>
                    
                </div>

                <div class="Redes">
                    
                    <div class="face">
                        <a href= "https://www.facebook.com/Odonto-108520777734904"><img src = {Facebook}/></a>
                    </div>
                    <div class="tt">
                    <a href= "https://twitter.com/Odonto42371651"><img src ={TT}/></a>
                    </div>
                    <div class="r">
                    <a href= "https://www.instagram.com/Odonto.gg/"><img src = {Instagram}/></a>
                    </div>
                </div>
            </div>
            <div class="Rod">
                <div class="in">    
                    
                    <div class="p"><Link class="linkOne" to = '/Priv/'>Centro de Privacidade</Link></div>
                    <div class="p"> <Link class="linkOne" to = '/Priv'>Politica de Privacidade</Link></div>
                    <div class="p"> <Link class="linkOne" to = '/Priv'>Cookies</Link></div>
                    <div class="p"> <Link class="linkOne" to ='/Term'>Termos de Uso</Link></div>
                    
                </div>

                <div class="in2">
                    <div class="br">
                        <p class="brr">Brasil</p>
                        <img src = {Brasil} />        
                    </div>
                    <div class="sla">© Hefesto Tech, 2020 All rights reserved</div>       
                </div>

            
            
        </div>   
    </div>

</div>

    
    </>
  );
}


