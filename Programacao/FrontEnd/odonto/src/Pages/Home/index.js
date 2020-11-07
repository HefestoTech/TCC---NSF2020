import React    from 'react';
import { Link } from 'react-router-dom';
import Dentista from '../../Assets/Fotos/dentista.jpg'
import Odonto   from '../../Assets/Fotos/odonto.png'
import Menu     from '../../Components/Menu'
import './Home.css';
import Instagram from '../../Assets/Fotos/Instagram.svg'



export default function App() {
  return (
    <>
    <div className="Cont">
      
      <Menu className="header">
        <div className="Tt1Home">
          <h5>O seu sorriso fica muito mais Lindo perto de nós, Dentistas, cuidando dele.</h5>
        </div>

        <div className="buttns">
        <Link to="/login"><button className="bt1 btn btn-danger" > Logar</button></Link> 
        <Link to="/cadastrar"> <button className="bt2 btn btn-danger">Cadastrar</button></Link>
        </div>
      </Menu>

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
                    <img></img>
                </div>
                <div class="g1">
                    <div class="l1">Empresa</div>
                    <div class="l">Sobre</div>
                    <div class="l">Empregos</div>
                    <div class="l">For the Record</div>
                </div>

                <div class="g2">
                    <div class="l1">Comunidade</div>
                    <div class="l">Para Artistas</div>
                    <div class="l">Desenvolvedores</div>
                    <div class="l">Marcas</div>
                    <div class="l">Investidores</div>
                    <div class="l">Fornecedores</div>
                </div>

                <div class="g3">
                    <div class="l1">Links Úteis</div>
                    <div class="l">Ajuda</div>
                    <div class="l">Player da Web</div>
                    <div class="l">Aplicativo móvel grátis</div>
                </div>

                <div class="Redes">
                    
                    <div class="r">
                        <img></img>
                    </div>
                    <div class="r">
                        <img></img>
                    </div>
                    <div class="r">
                        <img src = {Instagram}/>
                    </div>
                </div>
            </div>
            <div class="Rod">
                <div class="in">    
                    <div class="p">Legal</div>
                    <div class="p">Centro de Privacidade</div>
                    <div class="p">Politica de Privacidade</div>
                    <div class="p">Cookies</div>
                    <div class="p">Sobre Anúncios</div>
                </div>

                <div class="in2">
                    <div class="br">
                        <p>Brasil</p>
                        <img></img>              
                    <div class="sla">© 2020 Spotify AB</div>
                </div>
            </div>
        </div>    
    </div>

</div>

    
    </>
  );
}


