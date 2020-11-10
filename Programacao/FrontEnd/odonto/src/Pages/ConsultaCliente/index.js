
import React, { useEffect, useRef, useState } from 'react'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import OdontoApi from "../../Services/OdontoApi"
import './consultar.css'
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Components/Loading"
import LoadingBar from 'react-top-loading-bar'

const api = new OdontoApi();

export default function ConsultarCliente(props) {

    const [responseCompleto] = useState(props.location.state);
    
    const [agendados, setAgendados] = useState([]);
    
    const [concluidos, setConcluidos] = useState([]);
    
    const [cancelados, setCancelados] = useState([]);
    
    const [naoCompareceu, setNaoCompareceu] = useState([]);
    
    const [mostrarLoading, setMostrarLoading] = useState(false);
    
    const [situacaoMostrar, setSituacaoMostrar] = useState("Agendados");

    const history = useHistory();

    const loadingBar = useRef(null);

    const IrParaTelaDeRemarcar = (idAgendamento) => {

        history.push({
            pathname:"/remarcar",
            state: {responseCompleto, "idAgendamento": idAgendamento}
        });
  
    }

    const avaliarConsultaClick = (idAgendamento) => {
        history.push({
            pathname:"/feedback",
            state: {responseCompleto, "idAgendamento": idAgendamento}
        })
    }

   const pegarConsultasClienteClick = async () => {
        try {
            
            setMostrarLoading(true)
           
            const response = await api.PegarConsultasCliente(responseCompleto.idUsuario);
           
            
            setAgendados(response.agendados);
           
            setCancelados(response.cancelados);
           
            setNaoCompareceu(response.naoCompareceu);
           
            setConcluidos(response.concluidos);
           
            setMostrarLoading(false);

            
        } catch (e) {
            
            toast.error(e.response.data.erro)
            
            setMostrarLoading(false);
        }
   }

   const qualSituacaoMostrarClick = (situacaoQueVaiMostrar) => {
        setSituacaoMostrar(situacaoQueVaiMostrar);
   }

    const cancelarConsultaClick  = async(idConsulta) => { 
        try {
           
            api.CancelarConsulta(idConsulta);
           
            pegarConsultasClienteClick(responseCompleto.idUsuario);
           
            toast.success("A consulta foi cancelada com sucesso");
             
        }catch (e) {
       
            toast.error(e.response.data.erro);

        }
    }



   useEffect(() => {
    pegarConsultasClienteClick();
  }, [])

    return(
        <>
        <LoadingBar 
            height={4}
            color='#f11946'
			onRef={ref => (LoadingBar = ref)}
        />

        {mostrarLoading == true && 
        <div>
          <Loading/>
        </div>}
       
        <div className="ContCons" >
            <ToastContainer/>

            <Menu/>

            
                <div className="Tt1Cons">
                    <h3 className="display-23">Todos Agendamentos</h3>
                    <div className="ButtTitleConsulta btn-group" role="group">
                        <button type="button" onClick={() => qualSituacaoMostrarClick("Agendados")} className="btn btn-secondary" >Agendados</button>
                        <button type="button" onClick={() => qualSituacaoMostrarClick("Concluidos")} className="btn btn-secondary" >Concluidos</button>
                        <button type="button" onClick={() => qualSituacaoMostrarClick("Cancelados")} className="btn btn-secondary">Cancelados</button>
                        <button type="button" onClick={() => qualSituacaoMostrarClick("Não Compareceu")} className="btn btn-secondary" >Não Compareceu</button>
                    </div>   
               </div>


            <div className="BodyCons">

                
                {situacaoMostrar === "Agendados" && agendados !== undefined &&
                <div>
                {agendados.map (x => 
                <div className="boxCons">
                    <div className="TtsCons">
                        <h3>Dados da consulta</h3>
                        <h3>Pagamento da consulta</h3>
                    </div>

                    <div className="BoxForms">
                            <div className="geralCons">

                                <div className="lineForm1">
                                    <div className="nameCons">
                                        <h5>Nome: </h5>
                                        <input value={x.nomeCliente} type="text" readOnly className="nam form-control"  />
                                    </div>
                                
                                    <div className="dateCons">
                                        <h5>Data:</h5>
                                        <input value={new Date(x.data).toLocaleString()} type="text" readOnly className="date form-control"  />
                                    </div>
                                </div>


                            <div className="lineForm2">
                                    <div className="servCons">
                                        <h5>Serviço:</h5>
                                        <input value={x.servico} type="text" readOnly className="serv form-control"  />
                                    </div>

                                    <div className="drCons">
                                        <h5>Doutor:</h5>
                                        <input value={x.doutor} type="text" readOnly className="dr form-control"/>
                                    </div>

                                    
                                    <div className="sitCons">
                                        <h5>Situação:</h5>
                                        <input value={x.situacao} type="text" readOnly className="situ form-control"  />
                                    </div>
                            </div>

                            
                            <div className="lineForm4">
                                    <button onClick={() => IrParaTelaDeRemarcar(x.idConsulta)} className="btn btn-primary">Remarcar</button>
                            </div>


                            </div>
                            <div className="pagmCons">
                                <div className="linePag1">

                                    <div className="formPag">
                                        <h5>Forma de Pagamento:</h5>
                                        <div className="radios custom-control-inline">
                                            
                                          <input readOnly value={x.formaPagamento} className="desc form-control"/>
                                            
                                        </div>
                                    </div>

                                    <div className="formSub">
                                        <h5>Subtotal:</h5>
                                        <input type="text" readOnly className="subTot form-control" value={"R$" + x.subtotal} />
                                    </div>

                                     <p className="totalPorMesAgendar totMesColor">( {x.parcelas}X de R${x.totalPorMes} )</p>
                                                                       
                                </div>

                                <div className="linePag2">
                                    <div className="formDescont">
                                        <h5>Desconto:</h5>
                                        <input value={"R$" + x.desconto} type="text" readOnly className="desc form-control" />
                                    </div>

                                    <div className="formTotal">
                                        <h5>Valor Total:</h5>
                                        <input value={"R$" + x.valorTotal} type="text" className="tota form-control"/>
                                    </div>
                                </div>  


                                <div className="linePag3">
                                    <div className="buttsPag">
                                        <button onClick={() => cancelarConsultaClick(x.idConsulta)} className="btn btn-danger">Cancelar consulta</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )}
                </div>}
                {situacaoMostrar === "Agendados" && agendados.length === 0 &&
                <div className="semConsultasAgendadas"> 
                    <h3>Você não tem consultas agendadas.
                        <br/>
                       <Link to={{
                           pathname: "/agendarconsultacliente",
                           state: responseCompleto
                       }}> Agendar Consulta</Link>
                    </h3>
                </div>
                }

                {situacaoMostrar === "Cancelados" && cancelados !== undefined &&  <div>
                {cancelados.map (x => 
                <div className="boxCons">
                    <div className="TtsCons">
                        <h3>Dados da consulta</h3>
                        <h3>Pagamento da consulta</h3>
                    </div>

                    <div className="BoxForms">
                            <div className="geralCons">

                                <div className="lineForm1">
                                    <div className="nameCons">
                                        <h5>Nome: </h5>
                                        <input value={x.nomeCliente} type="text" readOnly className="nam form-control"  />
                                    </div>
                                
                                    <div className="dateCons">
                                        <h5>Data:</h5>
                                        <input value={new Date(x.data).toLocaleString()} type="text" readOnly className="date form-control"  />
                                    </div>
                                </div>


                            <div className="lineForm2">
                                    <div className="servCons">
                                        <h5>Serviço:</h5>
                                        <input value={x.servico} type="text" readOnly className="serv form-control"  />
                                    </div>

                                    <div className="drCons">
                                        <h5>Doutor:</h5>
                                        <input value={x.doutor} type="text" readOnly className="dr form-control"/>
                                    </div>

                                    
                                    <div className="sitCons">
                                        <h5>Situação:</h5>
                                        <input value={x.situacao} type="text" readOnly className="situ form-control"  />
                                    </div>
                            </div>

                            </div>
                            <div className="pagmCons">
                                <div className="linePag1">

                                    <div className="formPag">
                                        <h5>Forma de Pagamento:</h5>
                                        <div className="radios custom-control-inline">
                                            
                                          <input readOnly value={x.formaPagamento} className="desc form-control"/>
                                            
                                        </div>
                                    </div>

                                    <div className="formSub">
                                        <h5>Subtotal:</h5>
                                        <input type="text" readOnly className="sub form-control" value={"R$" + x.subtotal} />
                                    </div>

                                    <p className="totalPorMesAgendar totMesColor">( {x.parcelas}X de R${x.totalPorMes} )</p>
                                                                       
                                </div>

                                <div className="linePag2">
                                    <div className="formDescont">
                                        <h5>Desconto:</h5>
                                        <input value={"R$" + x.desconto} type="text" readOnly className="desc form-control" />
                                    </div>

                                    <div className="formTotal">
                                        <h5>Valor Total:</h5>
                                        <input value={"R$" + x.valorTotal} type="text" className="tota form-control"/>
                                    </div>
                                </div>  

                            </div>
                        </div>
                    </div>
                )}</div>}
                 {situacaoMostrar === "Cancelados" && cancelados.length === 0 &&
                 <div className="semConsultasAgendadas"> 
                    <h3>Você não tem consultas canceladas.
                        <br/>
                       <Link to={{
                           pathname: "/agendarconsultacliente",
                           state: responseCompleto
                       }}> Agendar Consulta</Link>
                    </h3>
                </div>
                }

                {situacaoMostrar === "Concluidos" && concluidos !== undefined &&
                <div>
                {concluidos.map (x => 
                <div className="boxCons">
                    <div className="TtsCons">
                        <h3>Dados da consulta</h3>
                        <h3>Pagamento da consulta</h3>
                    </div>

                    <div className="BoxForms">
                            <div className="geralCons">

                                <div className="lineForm1">
                                    <div className="nameCons">
                                        <h5>Nome: </h5>
                                        <input value={x.nomeCliente} type="text" readOnly className="nam form-control"  />
                                    </div>
                                
                                    <div className="dateCons">
                                        <h5>Data:</h5>
                                        <input value={new Date(x.data).toLocaleString()} type="text" readOnly className="date form-control"  />
                                    </div>
                                </div>


                            <div className="lineForm2">
                                    <div className="servCons">
                                        <h5>Serviço:</h5>
                                        <input value={x.servico} type="text" readOnly className="serv form-control"  />
                                    </div>

                                    <div className="drCons">
                                        <h5>Doutor:</h5>
                                        <input value={x.doutor} type="text" readOnly className="dr form-control"/>
                                    </div>

                                    
                                    <div className="sitCons">
                                        <h5>Situação:</h5>
                                        <input value={x.situacao} type="text" readOnly className="situ form-control"  />
                                    </div>
                            </div>

                            </div>
                            <div className="pagmCons">
                                <div className="linePag1">

                                    <div className="formPag">
                                        <h5>Forma de Pagamento:</h5>
                                        <div className="radios custom-control-inline">
                                            
                                          <input readOnly value={x.formaPagamento} className="desc form-control"/>
                                            
                                        </div>
                                    </div>

                                    <div className="formSub">
                                        <h5>Subtotal:</h5>
                                        <input type="text" readOnly className="sub form-control" value={"R$" + x.subtotal} />
                                    </div>

                                    <p className="totalPorMesAgendar totMesColor">( {x.parcelas}X de R${x.totalPorMes} )</p>
                                                                       
                                </div>

                                <div className="linePag2">
                                    <div className="formDescont">
                                        <h5>Desconto:</h5>
                                        <input value={"R$" + x.desconto} type="text" readOnly className="desc form-control" />
                                    </div>

                                    <div className="formTotal">
                                        <h5>Valor Total:</h5>
                                        <input value={"R$" + x.valorTotal} type="text" className="tota form-control"/>
                                    </div>
                                </div>  


                                <div className="linePag3">
                                    <div className="buttsPag">
                                        <button onClick={() => avaliarConsultaClick(x.idConsulta)} className="btn btn-primary">Avaliar consulta</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )}
                </div>}
                 {situacaoMostrar === "Concluidos" && concluidos.length === 0 &&
                 <div className="semConsultasAgendadas"> 
                    <h3>Você não tem consultas concluidas.
                        <br/>
                       <Link to={{
                           pathname: "/agendarconsultacliente",
                           state: responseCompleto
                       }}> Agendar Consulta</Link>
                    </h3>
                </div>
                }

                {situacaoMostrar === "Não Compareceu" && naoCompareceu !== undefined && 
                <div>
                {naoCompareceu.map (x => 
                <div className="boxCons">
                    <div className="TtsCons">
                        <h3>Dados da consulta</h3>
                        <h3>Pagamento da consulta</h3>
                    </div>

                    <div className="BoxForms">
                            <div className="geralCons">

                                <div className="lineForm1">
                                    <div className="nameCons">
                                        <h5>Nome: </h5>
                                        <input value={x.nomeCliente} type="text" readOnly className="nam form-control"  />
                                    </div>
                                
                                    <div className="dateCons">
                                        <h5>Data:</h5>
                                        <input value={new Date(x.data).toLocaleString()} type="text" readOnly className="date form-control"  />
                                    </div>
                                </div>


                            <div className="lineForm2">
                                    <div className="servCons">
                                        <h5>Serviço:</h5>
                                        <input value={x.servico} type="text" readOnly className="serv form-control"  />
                                    </div>

                                    <div className="drCons">
                                        <h5>Doutor:</h5>
                                        <input value={x.doutor} type="text" readOnly className="dr form-control"/>
                                    </div>

                                    
                                    <div className="sitCons">
                                        <h5>Situação:</h5>
                                        <input value={x.situacao} type="text" readOnly className="situ form-control"  />
                                    </div>
                            </div>

                            </div>
                            <div className="pagmCons">
                                <div className="linePag1">

                                    <div className="formPag">
                                        <h5>Forma de Pagamento:</h5>
                                        <div className="radios custom-control-inline">
                                            
                                          <input readOnly value={x.formaPagamento} className="desc form-control"/>
                                            
                                        </div>
                                    </div>

                                    <div className="formSub">
                                        <h5>Subtotal:</h5>
                                        <input type="text" readOnly className="sub form-control" value={"R$" + x.subtotal} />
                                    </div>

                                    <p className="totalPorMesAgendar totMesColor">( {x.parcelas}X de R${x.totalPorMes} )</p>
                                                                       
                                </div>

                                <div className="linePag2">
                                    <div className="formDescont">
                                        <h5>Desconto:</h5>
                                        <input value={"R$" + x.desconto} type="text" readOnly className="desc form-control" />
                                    </div>

                                    <div className="formTotal">
                                        <h5>Valor Total:</h5>
                                        <input value={"R$" + x.valorTotal} type="text" className="tota form-control"/>
                                    </div>
                                </div>  

                            </div>
                        </div>
                    </div>
                    
                )}
                </div>}
                 {situacaoMostrar === "Não Compareceu" && naoCompareceu.length === 0 &&
                <div className="semConsultasAgendadas"> 
                    <h3>Não há consultas em que você não compareceu.
                        <br/>
                       <Link to={{
                           pathname: "/agendarconsultacliente",
                           state: responseCompleto
                       }}> Agendar Consulta</Link>
                    </h3>
                </div>
                }


            </div>
            
        </div>
         
        <Footer/>
        
        </>
    )
}