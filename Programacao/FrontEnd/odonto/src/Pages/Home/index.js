import React    from 'react';
import { Link } from 'react-router-dom';
import Dentista from '../../Assets/Fotos/dentista.jpg'
import Odonto   from '../../Assets/Fotos/odonto.png'
import Menu     from '../../Components/Menu'
import './Home.css';
import Instagram from '../../Assets/Fotos/Instagram.svg'
import TT from '../../Assets//Fotos/ttlogo.svg'
import Facebook from '../../Assets/Fotos/facelogo.svg'
import Brasil from '../../Assets/Fotos/bandeirabrasil.png'


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

      <div className="body">
        <div className="msgs">
            <div className="inf">

              <div className="local">
                <h2> Onde estamos.</h2> 
                <h3>R. Sorrisão, 123</h3>
                <h3>Jd. Bucal,SP</h3>
              </div>

              <div className="phone">
                <h2>Fale conosco!</h2>
                <h3>(xx) 5555-6666</h3>
              </div>
              
            </div>
            <div className="ft"> 
                <img src={Dentista}/>
            </div>

        </div>

        <div className="tab">
            <div className="tabinto">
            <h4 className="h4_tabelaHome">Tabela de preços das especializações em destaque!</h4>
              <table className="table table-borderless">

                <thead>
                  <tr>
                    <td>Clareamento</td>
                    <td >R$215,00</td>
                  </tr>

                  <tr>
                    <td>Manutenção de Aparelho fixo</td>
                    <td >R$75,00</td>
                  </tr>

                  <tr>
                    <td>Limpeza</td>
                    <td >R$140,00</td>
                  </tr>

                  <tr>
                    <td>Reconstrução c/ Resina</td>
                    <td >R$120,00</td>
                  </tr>

                  <tr>
                    <td>Canal</td>
                    <td >R$279,00</td>
                  </tr>
                  
                  <tr>
                    <td>Limpeza de Tártaro</td>
                    <td >R$160,00</td>
                  </tr>
                  
                  <tr>
                    <td>Tratamento de Cáries</td>
                    <td >R$230,00</td>
                  </tr>

                </thead>


              </table>
            </div>

            <div className="box">
              <div className="icon1">
                <img src={Odonto} />
              </div>

              <div className="text2">
                <h3>Um dia sem um Sorriso, é um dia Perdido.</h3>
              </div>
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
                    <div class="l">Fornecedores</div>
                    
                </div>

                <div class="g2">
                    <div class="l1">Comunidade</div>
                    <div class="l"> <Link class="linkOneOne" to = '/sobredev'>Desenvolvedores</Link></div>
                    <div class="l">Marcas</div> 
                </div>

                <div class="g3">
                    <div class="l1">Links Úteis</div>
                    <div class="l"><Link class="linkOneOne"to='/Devapp' >Aplicativo móvel em desenvolvimento</Link></div>
                    <div class="l">Ajuda</div>
                    
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


