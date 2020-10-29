import React, { useState }    from 'react';
import SetaDir  from '../../Assets/Fotos/arrowr.png' 
import { Link } from 'react-router-dom';
import './cadastrar.css';
import CepApi from "../../Services/CepApi";
import OdontoApi from "../../Services/OdontoApi"

const cepApi = new CepApi();

 export default function Cadastrar()
 {
     const [mostrarSenha, setMostrarSenha] = useState("password");

     const [cep, setCep] = useState(0);
     const [logradouro, setLogradouro] = useState(null);
     const [cidade, setCidade] = useState(null);
     const [estado, setEstado] = useState(null);
     const [complemento, setComplemento] = useState(null);
     const [numeroResidencial, setNumeroResidencial] = useState(0);


    


     const pegarInformacoesApartirDoCep = async  (cepEnviadoPeloUsuario) => {
                const response = await cepApi.consultar(cepEnviadoPeloUsuario);
                setLogradouro(response.logradouro);
                setComplemento(response.complemento);
                setCidade(response.localidade);
                setEstado(response.uf)
                setCep(response.cep);
            
            if (response.erro === true)
                alert("CEP não encontrado");
            
            
        }

        

     const mudarMostrarSenha = () => {
         if(mostrarSenha == "password")
            setMostrarSenha("text");
         else 
            setMostrarSenha("password")    
     }
     return(

        <div className="ContCad">
            <Link to="/" ><h1 className="logohome">ODONTO</h1></Link>
            <div className="bodyCad">
                <div className="Tt1cad"><h1>Crie seu perfil</h1></div>
                <div className="FormPers">

                    
                    <div className="Tt2Cad">
                        <h3>Insira seus Dados Pessoais</h3>
                        <h5 className="obr">Os campos com(*)são obrigatórios</h5>
                    </div>

                    <div className="line1">
                        <div className="formName">
                            <h5>Nome Completo*</h5>
                            <input type="text" class="form-control"  placeholder="Fulano de Tal" />
                        </div>

                        <div className="formSexo">
                            <h5>Selecione seu Sexo*</h5>
                            <div className="radios custom-control custom-radio custom-control-inline">
                                
                                <input type="radio" name="sexo"/><h5>Masculino</h5>
                                <input type="radio" name="sexo"  className="fem" /><h5>Feminino</h5>
                            </div>
                        </div>

                        <div className="formNasc">
                            <h5>Data de Nascimento*</h5>
                            <input type="date" className="form-control" />
                        </div>

                    </div>

                    <div className="line2">
                        <div className="formCPF">
                            <h5>CPF*</h5>
                            <input type="text" className=" form-control" placeholder="000.000.000-0" />
                        </div>
                        

                        <div className="formCEP">
                            <h5>CEP*</h5>
                            <input onChange={(e) => pegarInformacoesApartirDoCep(e.target.value)} type="text" className="form-control"  placeholder="12345-678" />
                        </div>

                        <div className="formLograd">
                            <h5>Logradouro*</h5>
                            <input value={logradouro} readOnly type="text" className="form-control" placeholder="R. Fulandia das Águas"/>
                        </div>

                       

                        

                        <div className="formNum">
                            <h5>Nº*</h5>
                            <input value={numeroResidencial} type="number" className="form-control" placeholder="Ex:12" />
                        </div>
                    </div>

                    <div className="line3">
                        <div className="formComple">
                            <h5>Complemento</h5>
                            <input value={complemento} type="text" className="form-control" placeholder="Apt.30" />
                        </div>

                        <div className="formCity">
                            <h5>Cidade*</h5>
                            <input value={cidade} readOnly type="text" className="form-control" placeholder="São Paulo" />
                        </div>

                        <div className="formState">
                            <h5>Estado*</h5>
                            <input value={estado} readOnly type="text" className="form-control" placeholder="São Paulo" />
                            
                        </div>

                    </div>

                    <div className="line4">
                        <div className="formPhone">
                            <h5>Telefone para contato*</h5>
                            <input type="text" className="form-control" placeholder="(xx) 99999-5555" />
                        </div>
                    </div>
                </div>

                <div className="FormRegist">
                    <div className="TtReg1">
                        <h3>Crie uma conta</h3>
                    </div>

                    <div className="line5">
                       <div className="formEmail">
                            <h5>Crie um e-mail</h5>
                            <input type="text" className="form-control" placeholder="Fulano123@example.com" />
                       </div>
                    </div>

                    <div className="line6">
                        <div className="formPassw">
                            <h5>Crie uma senha</h5>
                            <input type={mostrarSenha} className="form-control" placeholder="******" />
                        </div>

                        <div className="formConfiPassw">
                            <h5>Confirme sua senha</h5>
                            <input type={mostrarSenha} className="form-control" placeholder="******" />
                        </div>

                       <i onClick={mudarMostrarSenha} class="far fa-eye-slash"></i>
                    </div>

                    <div className="line7"> 
                        <div className="ButConf ">
                            <button className="btn btn-primary"> 
                                <h5>Confirmar <img src={SetaDir} className="imgconf"/></h5>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
             
        </div>
         

     )
 }
