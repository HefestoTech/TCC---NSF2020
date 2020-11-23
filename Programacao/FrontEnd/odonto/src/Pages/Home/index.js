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
import Logozin from '../../Assets/Fotos/odonto5.png'


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
          <Link to="/login"> <button className="bt2Login btn btn-danger" > Logar</button></Link> 
          <Link to="/cadastrar"> <button className="bt2Login btn btn-danger">Cadastrar</button></Link>
          </div>
      </div>
      <div>
        <Carousel  responsive={responsive}> 
          <div className="starHome"> <p class="pDoCarrossel1">Preenchimento de conteúdo</p>
        </div>
          <div className="starHomeONEE">
            <p class="pDoCarrossel">Texto a ser colocado</p>
            <img src={Dentista} class="imgdentista" />
          </div>
          
          <div  className="starHomeTWOO"> 
            <img src={Dentee} class="imgdenteee"/>
            <p class="pDoCarrossel">Texto a ser colocado</p>
        </div>

        </Carousel>
  </div> 


    <div className="divimg">
        <div>
          <a class="clinica btn btn-info" role="button"></a>
          <div className="onclink">A odonto clínicas tras a melhor qualidade e melhor atendimento para que o seu sorriso brilhe muito mais!</div>
    </div>
  
      <div>
        <a class=" clareamento btn btn-info" role="button"></a>
        <div className="onclink">Clareamento dental é um tratamento utilizado para tornar os dentes mais brancos.</div>
    </div>
    
      <div>
        <a class=" proteses btn btn-info" role="button"></a>
        <div className="onclink">A prótese dentária é a arte dental, ciência que lida com a reposição de tecidos bucais e dentes perdidos, visando restaurar e manter a forma, função, aparência e saúde bucal.</div>
    </div>
    
      <div>
        <a class=" implante btn btn-info" role="button"></a>
        <div className="onclink">Implante é um ramo da Odontologia que se destina ao tratamento do edentulismo com reabilitações protéticas suportadas ou retidas por implantes dentários. Com o implante são feitas desde reabilitações unitárias ate reparações totais fixas ou removíveis.</div>
    </div>
  </div>

     
    <div class="Anucios">
        <div class="quadradoRight">
            <div className="Tt1An">
            <p class="pHomee22">Limpeza</p>
            </div>
            <div className="Tt2An">
            <p className ="precoHome1">R$</p>
            <p className ="precoHome2">140,00</p>
            </div>
        </div>

        <div class="rightMini">
            <div className="Tt3An">
            <p className="pHome3">O que é a limpeza dentária?</p>
            <p class="pHome5">Na limpeza da superfície dentária, o que inclui toda a região exposta dos dentes. Assim, há a remoção efetiva da potencial placa bacteriana, que quando não é eliminada, pode evoluir para problemas mais sérios como o tártaro, a gengivite.</p>
            </div>
        </div>   
    </div>

    <div class="AnuciosTwo">
        <div class="quadradoLeft">
            <div className="Tt4An">
            <p class="pHomee">Em Breve Odonto 
            Advanced
            </p>
              <img src={Logozin} class="imglogozin" />
            </div>
            <div className="Tt5An">
              <p className ="precoHome1">R$</p>
              <p className ="precoHome2">59,90</p>
              <p className ="precoHome1">/mês</p>
              </div>
        </div>

        <div class="LeftMini">
            <div className="Tt6An"> 
            <p className="pHome3">Plano Advanced</p>
            <p class="pHome4">O plano odontológico de alta qualidade para você e sua família. Pelo preço de um único tratamento você pode ter um plano odontológico sem limites de utilização nas especialidades cobertas.</p>
            </div>
        </div>   
    </div>
         
      <div class="Nossocontato">
        <div class="NossocontatoTwo">
          <div class="armazenar">
              <p class="teleHome">Telefone: <h6 className="h2Homeeee">(11) 8744-3312 - (11) 99933-2459</h6></p>
              <p class="teleHome">Endereço: <h6 className="h2Homeeee">Rua Prudente Correia - 1410 / Jd.Europa</h6></p>
              <p class="teleHome">E-mail:<h6 className="h2Homeeee">odontoclinicasp@gmail.com/odonto2020@gmail.com</h6></p>
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


