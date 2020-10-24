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
telad
                    <div className="line1">
                        <div className="formName">
                            <h5>Nome Completo*</h5>
                            <input type="text" class="form-control" />
                        </div>

                        <div className="formSexo">
                            <h5>Selecione seu Sexo*</h5>
                            <input type="radio" name="sexo"/>
                            <input type="radio" name="sexo" />
                        </div>
                    </div>

                    <div className="form2"></div>

                </div>


                <div className="FormRegist"></div>
            </div>
             
        </div>
         

     )
 }

