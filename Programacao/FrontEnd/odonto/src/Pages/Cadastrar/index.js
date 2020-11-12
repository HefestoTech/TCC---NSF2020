import React, { useState }    from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './cadastrar.css';
import SetaDir  from '../../Assets/Fotos/arrowr.png' 
import CepApi from "../../Services/CepApi";
import OdontoApi from "../../Services/OdontoApi"
import Loading from "../../Components/Loading";
import DenteWorld from "../../Assets/Fotos/denteworld.png"
import InputMask from "react-input-mask";


const cepApi = new CepApi();
const odontoApi = new OdontoApi();

 export default function Cadastrar()
 {
    const history = useHistory();


    const [mostrarLoading, setMostrarLoading] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState("password");
    const [cep, setCep] = useState(0);
    const [logradouro, setLogradouro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [complemento, setComplemento] = useState("");
    const [numeroResidencial, setNumeroResidencial] = useState(0);
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState(null);
    const [dataNascimento, setDataNascimento] = useState(null);
    const [Cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    
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


    const verSeSenhasSãoIguais = () => {
            const x = senha1 === senha2;
            return x
    }


    const cadastrarClick = async () => {

    setMostrarLoading(true);

    try {

        const x = verSeSenhasSãoIguais();

        if(x === false){
            setMostrarLoading(false);
            toast.error("A senhas são diferentes.");
        }
        else if(dataNascimento === null){
            setMostrarLoading(false);
            toast.error("A data de nascimento é obrigatória");
        }
        else{   
            const request = { 
                "Email": email,
                "Senha": senha1,
                "Nome": nome,
                "Sexo": sexo,
                "Nascimento": dataNascimento,
                "CPF": Cpf,
                "CEP": cep,
                "Logradouro": logradouro,
                "NumeroResidencial": numeroResidencial,
                "Complemento": complemento,
                "Cidade": cidade,
                "Estado": estado,
                "Telefone": telefone
                };

            
            const response = await odontoApi.Cadastrar(request);

            setMostrarLoading(false);

            history.push({
                pathname: `/menu/cliente`,
                state: response

        });
            
        }
        
    } catch (e) {
        setMostrarLoading(false);
        toast.error(e.response.data.erro)
        
    }
        
}
        const mudarMostrarSenha = () => {
         if(mostrarSenha == "password")
            setMostrarSenha("text");
         else 
            setMostrarSenha("password")    
     }
     return(
         <>
          {mostrarLoading === true &&
            <div>
                <Loading/>
            </div>
            }

        <div className="ContCad bck">
            <ToastContainer/>

           
            <Link to="/" ><h1 className="logohome">ODONTO</h1></Link>
            <div className="bodyCad shadow-lg p-3 mb-5 bg-white rounded">

                <div className="lineTt1">
                    <div className="Tt1cad">
                        <h1>Crie seu perfil</h1><img src={DenteWorld} className="imgteeth" />
                    </div>
                </div>

                <div className="FormPers">

                    
                    <div className="Tt2Cad">
                        <h3>Insira seus Dados Pessoais</h3>
                        <h5 className="obr">Os campos com(*)são obrigatórios</h5>
                    </div>

                    <div className="line1">
                        <div className="formName">
                            <h5>Nome Completo*</h5>
                            <input type="text" class="form-control"  placeholder="Fulano de Tal" 
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className="formSexo">
                            <h5>Selecione seu Sexo*</h5>
                            <div className="radios custom-control custom-radio custom-control-inline">
                                
                                <input type="radio" name="sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.checked ?"M":null)}
                                /> <h5>Masculino</h5>


                                <input type="radio" name="sexo"  className="fem" 
                                value={sexo}
                                onChange={e => setSexo(e.target.checked ?"F":null)}
                                /> <h5>Feminino</h5>
                                
                            </div>
                        </div>

                        <div className="formNasc">
                            <h5>Data de Nascimento*</h5>
                            <input type="date" className="form-control" 
                            value={dataNascimento}
                            onChange={e => setDataNascimento(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="line2">
                        <div className="formCPF">
                            <h5>CPF*</h5>
                            <InputMask mask="999.999.999-99" type="text" className=" form-control" placeholder="000.000.000-0" 
                            value={Cpf}
                            onChange={e => setCpf(e.target.value)}
                            />
                        </div>
                        

                        <div className="formCEP">
                            <h5>CEP*</h5>
                            <InputMask mask="99999-999" onChange={(e) => pegarInformacoesApartirDoCep(e.target.value)} type="text" className="form-control"  placeholder="12345-678" />
                        </div>

                        <div className="formLograd">
                            <h5>Logradouro*</h5>
                            <input value={logradouro} readOnly type="text" className="form-control" placeholder="R. Fulandia das Águas"/>
                        </div>

                       

                        

                        <div className="formNum">
                            <h5>Nº*</h5>
                            <input value={numeroResidencial} type="number" className="form-control" placeholder="Ex:12" 
                            onChange={e => setNumeroResidencial(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="line3">
                        <div className="formComple">
                            <h5>Complemento</h5>
                            <input value={complemento} type="text" className="form-control" placeholder="Apt.30" 
                            value={complemento}
                            onChange={e => setComplemento(e.target.value)}
                            />
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
                            <InputMask mask="(99) 99999-9999" type="text" className="form-control" placeholder="(xx) 99999-5555" 
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            />
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
                            <input type="text" className="form-control" placeholder="Fulano123@example.com" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                       </div>
                    </div>

                    <div className="line6">
                        <div className="formPassw">
                            <h5>Crie uma senha</h5>
                            <input onChange={e => setSenha1(e.target.value)} type={mostrarSenha} className="form-control" placeholder="******" />
                        </div>

                        <div className="formConfiPassw">
                            <h5>Confirme sua senha</h5>
                            <input onChange={e => setSenha2(e.target.value)}  type={mostrarSenha} className=" form-control" placeholder="******" />
                        </div>

                       <i onClick={mudarMostrarSenha} class="olho1 far fa-eye-slash"></i>
                    </div>

                    <div className="line7"> 
                        <div className="ButConf ">
                            <button onClick={cadastrarClick} className="btn btn-primary"> 
                                <h5>Confirmar <img src={SetaDir} className="imgconf"/></h5>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
             
        </div>
         
     </>
     )
 }
