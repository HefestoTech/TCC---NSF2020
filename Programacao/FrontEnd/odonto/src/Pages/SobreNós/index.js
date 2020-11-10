import React from 'react'
import { Link } from 'react-router-dom'
import './sobre.css'


export default function SobreNos() {
    return(
        
        <div class="fundoMil">
            <div class="divTwoMil"> 
                 <Link class="ttt" to = '/'><h1>Odonto</h1></Link>
             <Link to='/'><i class="fas fa-tooth"></i></Link>
            </div>
            
            <div class="theerMil">

                <h2 class="titulosobre">Sobre Nós</h2>
                <p className="pCenter"> A clinica Odonto surgiu em 4 de janeiro de 2002 e tinha como finalidade trazer para nossos pacientes os melhores tratamentos e cuidados para tornar seu sorriso ainda mais radiante! A clinica foi fundada pelo Doutor Bruno Figueredo Silva Lima formado em Odontologia pela USP em 1995 e inaugurando sua primeira clínica em 2002 no mesmo local onde hoje é nossa clínica em São Paulo. Ou seja, estamos no mercado há quase 18 anos. Atualmente estamos presente na cidade de São Paulo capital.</p>
                <p className="pCenter">Todas nossas unidades possuem raio-x digital periapical, o que proporciona o diagnóstico preciso e eficaz na hora. Na unidade de São Paulo temos ainda aparelho de raio-x digital panorâmico e tomógrafo. O paciente não precisa sair de nossas clínicas pra fazer exames complementares em outro local.</p>
                <p className="pCenter">Além disso, trabalhamos com produtos exclusivos como: implantes suíços Straumann (dente definitivo em 21 dias) e implantes metalfree, aparelho ortodôntico auto-ligável e aparelho ortodôntico com moldeiras transparentes. E equipe com atendimento bilíngue, inglês e português. English spoken.</p>
                <p className="pCenter">Para mais informações consulte nas redes socias, <a href= "https://www.facebook.com/Odonto-108520777734904">Facebook</a> <a href= "https://twitter.com/Odonto13836263">Twitter</a> e <a href= "https://www.instagram.com/Odonto.gg/">Instagram</a> </p>

            </div>
            <div class="rodapésobre">

                <p className="rodapezinnn">
                    Odonto, seu sorriso fica muito mais lindo perto de nós, dentistas, cuidando dele.
                </p>

            </div>
        </div>
        
          
    )
}