import React from 'react'
import './term.css'
import Menu from '../../Components/Menu'
import { Link } from 'react-router-dom'

export default function TermoDeUso() {
    return(
       
        <div>
            <div className="logo">
                <Link to= "/"><h1>ODONTO</h1> </Link>
            </div>
            <div className="btnprivacidade"> <Link to= '/Priv'><button type="button" class="btn btn-outline-info">Politica de Privacidade</button></Link>
        </div>
            <div className="slA">
                <div id="terms">
                        <h2 class="titulopriv">1. Termos</h2>
                        <p>Ao acessar ao site <Link to ='/'>Odonto</Link>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
                        <h2 class="titulopriv">2. Uso de Licença</h2>
                        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Odonto , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>
                        <ol> 
                            <li class="ll2">modificar ou copiar os materiais;  </li> 
                            <li class="ll2">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);  </li>
                            <li class="ll2">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Odonto;  </li> 
                            <li class="ll2">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li> 
                            <li class="ll2">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li> 
                        </ol>
                </div>
                <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Odonto a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p> 
                <h2 class="titulopriv">3. Isenção de responsabilidade</h2>
                <ol> 
                    <li class="ll2">Os materiais no site da Odonto são fornecidos 'como estão'. Odonto não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li> 
                    <li class="ll2">Além disso, o Odonto não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li> 
                </ol> 
                <h2 class="titulopriv">4. Limitações</h2>
                <p>Em nenhum caso o Odonto ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Odonto, mesmo que Odonto ou um representante autorizado da Odonto tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
                <h3 class="tituloprivOne">Precisão dos materiais</h3>
                <p>Os materiais exibidos no site da Odonto podem incluir erros técnicos, tipográficos ou fotográficos. Odonto não garante que qualquer material em seu site seja preciso, completo ou atual. Odonto pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Odonto não se compromete a atualizar os materiais.</p>
                <h2 class="titulopriv">6. Links</h2>
                <p>O Odonto não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Odonto do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
               <h3 class="tituloprivOne">Modificações</h3> 
               <p>O Odonto pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
               <h3 class="tituloprivOne">Lei aplicável</h3> 
               <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Odonto e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
            </div>
        </div>
    )
}