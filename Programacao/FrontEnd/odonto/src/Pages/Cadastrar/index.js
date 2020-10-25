import React from 'react';
import './cadastrar.css';

 export default function Cadastrar()
 {
     return(

        <div className="ContCad">
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

                        <div className="formPhone" >
                            <h5>Telefone*</h5>
                            <input type="text" className="numb form-control" placeholder="(xx) 99999-3333" />
                        </div>

                    </div>

                    <div className="line2">
                        <div className="formCPF">
                            <h5>CPF*</h5>
                            <input type="text" className=" form-control" placeholder="000.000.000-0" />
                        </div>

                        <div className="formCEP">
                            <h5>CEP*</h5>
                            <input type="text" className="form-control"  placeholder="12345-678" />
                        </div>

                        <div className="formLograd">
                            <h5>Logradouro*</h5>
                            <input type="text" className="form-control" placeholder="R. Fulandia das Águas"/>
                        </div>

                        <div className="formNum">
                            <h5>Nº*</h5>
                            <input type="number" className="form-control" />
                        </div>
                    </div>

                </div>


                <div className="FormRegist"></div>
            </div>
             
        </div>
         

     )
 }

