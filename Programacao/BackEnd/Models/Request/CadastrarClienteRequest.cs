using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class CadastrarClienteRequest
    {
        id_cliente INT PRIMARY KEY AUTO_INCREMENT,
        id_login INT NOT NULL,
        nm_cliente VARCHAR(45) NOT NULL,
        ds_cpf VARCHAR(45) NOT NULL,
        ds_telefone VARCHAR(45) NOT NULL,
        ds_estado VARCHAR(45) NOT NULL,
        ds_cidade VARCHAR(45) NOT NULL,
        ds_cep VARCHAR(9) NOT NULL,
        nr_residenical INT NOT NULL,
        ds_complemento VARCHAR(45) NULL,
        ds_sexo VARCHAR(2) NOT NULL,
        dt_nascimento DATETIME NOT NULL,
        ds_lougradouro VARCHAR(45) NOT NULL,        
    }
}