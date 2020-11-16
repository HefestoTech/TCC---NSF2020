import React from 'react'
import { Link } from 'react-router-dom'
import './dev.css'
import Instagram from '../../Assets/Fotos/Instagram.svg'
import TT from '../../Assets//Fotos/ttlogo.svg'
import Facebook from '../../Assets/Fotos/facelogo.svg'
import GitHub from '../../Assets/Fotos/github.png'
export default function SobreDev() {
    return(
        <div class="fundodev">
            <div class="devOne"> 
            <Link to= '/' ><h1 class="hOne"> <i class="fab fa-hire-a-helper"></i>efesto Tech Developers </h1></Link>

            <div class="RedesDev">
            
            <div class="faceOne">
            <a href=" https://www.facebook.com/Hefesto-Tech-103795028212808"> <img src = {Facebook}/></a>
                </div>
                
                <div class="ttOne">
                    <a href=""><img src ={TT}/> </a>
                </div>
                
                <div class="rOne">
                   <a href="vhttps://www.instagram.com/hefesto.tec/"><img src = {Instagram}/></a>
                </div>

                <div class="GbOne">
                    <a href="https://github.com/HefestoTech"><img src={GitHub}></img></a>
                </div>

            </div>

            </div>

            
            <div class="devTheer">
                
                <h2 className="htwodev"> Sobre nós </h2>
                <p className="pzao"> A HefestoTech foi criada  por um grupo de 4 amigos em 2020. Eles se conheceram e conheceram a programação a partir do Instituto Nossa Senhora de Fátima, uma organização social situada em São Paulo. Logo na primeira vez que se viram logo de cara houve uma identificação muito rápida. A partir do TCC eles se juntaram e perceberam que podiam fazer muito mais e tiveram a ideia de criar um sistema para uma clinica odontologica, visando facilitar a vida de quem trabalha nessa área, economizando tempo e muito papel. Tornando tanto os processos comuns quanto os mais complicados,  e assim tornado a ação de  agendar uma nova consulta de forma muito mais fácil e rápida.</p>
                <p className="pzao">Esses quatro amigos tem o proposito de levar os seus conhecimentos gerais na área de programação para criação e desenvolvimento de aplicativos e sites trazendo a eficiência e qualidade para seus projetos. A HefestoTech tem pouco tempo de vida e seus integrantes ainda não tem muita experiência, mas com muito esforço e dedicação, logo serão reconhecidos no mercado.</p>

        </div>
        
        <div class="rodapésob">
        <p className="rodapezinnn"> © Hefesto Tech, 2020 All rights reserved </p>
        
        </div>
    </div>
    )
}

