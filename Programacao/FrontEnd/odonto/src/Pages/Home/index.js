import React    from 'react';
import { Link } from 'react-router-dom';
import Dentista from '../../Assets/dentista.jpg'
import Odonto   from '../../Assets/odonto.png'
import Rodape   from '../../Components/Footer';
import Menu     from '../../Components/Menu'
import './Home.css';

export default function App() {
  return (
    <div className="Cont">
      
      <Menu>
        <div className="buttns">
        <Link to="/login"><button className="bt1 btn btn-outline-danger" > Logar</button></Link> 
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
            <h4>Tabela de preços das especializações em destaque!</h4>
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

        <Rodape/>

    </div>
  );
}


