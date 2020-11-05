
import React, { useEffect, useState } from 'react'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import OdontoApi from "../../Services/OdontoApi"
import './consultar.css'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Components/Loading"

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

    const IrParaTelaDeRemarcar = (idAgendamento) => {
        history.push({
            pathname:"/remarcar/"+props.location.state.idUsuario,
            state: {responseCompleto, "idAgendamento": idAgendamento}
        });
    }

   const pegarConsultasClienteClick = async () => {
        try {
            setMostrarLoading(true)
           
            const response = await api.PegarConsultasCliente(responseCompleto.idUsuario);
           
            console.log(response.concluidos);
            console.log("oiii")
           
            setAgendados(response.agendados);
            setCancelados(response.cancelados);
            setNaoCompareceu(responseCompleto.naoCompareceu);
            setConcluidos(responseCompleto.concluidos);
           
            setMostrarLoading(false);

            
        } catch (e) {
            setMostrarLoading(false);
        }
   }

   const qualSituacaoMostrarClick = (situacaoQueVaiMostrar) => {

        setSituacaoMostrar(situacaoQueVaiMostrar);
       
   }

    const cancelarConsultaClick  = async(idConsulta) => {
         try {
            setMostrarLoading(true);
            api.CancelarConsulta(idConsulta);
            pegarConsultasClienteClick(responseCompleto.idUsuario);
            setMostrarLoading(false);
            toast.success("Consulta cancelada com sucesso");
             
         } catch (e) {
            setMostrarLoading(false);
            toast.error(e.response.data.erro);
         }
    }

   useEffect(() => {
    pegarConsultasClienteClick();
  }, [])

    return(
        <>
        {mostrarLoading == true && 
        <div>
          <Loading/>
        </div>}
        <div className="ContCons" >
            <ToastContainer></ToastContainer>

            <Menu></Menu>

            <div className="BodyCons">

                <div className="Tt1Cons">
                    <h3 className="display-23">Meus Agendamentos</h3>
                    <span className="spanTitleConsulta">
                        <span onClick={() => qualSituacaoMostrarClick("Agendados")} >Agendados</span> | <span onClick={() => qualSituacaoMostrarClick("Concluidos")}>Concluidos</span> | <span onClick={() => qualSituacaoMostrarClick("Cancelados")}>Cancelados</span> | <span onClick={() => qualSituacaoMostrarClick("Não Compareceu")}>Não Compareceu</span>
                    </span>
                   
                    
                </div>

                {situacaoMostrar == "Agendados" &&
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
                                        <input value={x.data} type="text" readOnly className="date form-control"  />
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
                                        <input type="text" readOnly className="sub form-control" value={"R$" + x.subtotal} />
                                    </div>
                                                                       
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

                {situacaoMostrar == "Cancelados" && <div>
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
                                        <input value={x.data} type="text" readOnly className="date form-control"  />
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


            </div>
            
        </div>
         
        <Footer/>
        
        </>
    )
}