 /* 
 
 CREATE DATABASE DB_ODONTO;
 
 USE DB_ODONTO;
 
 CREATE TABLE tb_login (
  id_login INT PRIMARY KEY AUTO_INCREMENT,
  ds_email VARCHAR(45) NOT NULL,
  ds_senha VARCHAR(45) NOT NULL,
  ds_perfil VARCHAR(45)  NOT NULL
  );

 CREATE TABLE tb_funcionario (
  id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
  id_login INT NOT NULL,
  ds_telefone VARCHAR(15),
  nm_funcionario VARCHAR(60) NOT NULL,
  ds_cpf VARCHAR(14) NOT NULL,
  ds_cep VARCHAR(9) NOT NULL,
  ds_complemento VARCHAR(45),
  ds_sexo VARCHAR(2) NOT NULL,
  ds_nis VARCHAR(45),
  dt_nascimento DATETIME NOT NULL,
  ds_cro VARCHAR(45) NULL,
  ds_logradouro VARCHAR(45) NOT NULL,
  ds_estado VARCHAR(45) NOT NULL,
  ds_alergico_medicacao VARCHAR(45),
  ds_alergico_refeicao VARCHAR(45),
  nr_residencial INT NOT NULL,
  FOREIGN KEY ( id_login) REFERENCES tb_login ( id_login ) ON DELETE CASCADE
);

 CREATE TABLE tb_cliente (
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
  FOREIGN KEY (id_login) REFERENCES tb_login (id_login) ON DELETE CASCADE
);


 CREATE TABLE tb_servico (
  id_servico INT PRIMARY KEY AUTO_INCREMENT,
  nm_servico VARCHAR(45) NOT NULL,
  vl_preco_servico DECIMAL(15,2) NOT NULL,
  ds_especificacoes VARCHAR(200) NOT NULL
);


 CREATE TABLE tb_perfil_acesso (
  id_perfil_acesso INT PRIMARY KEY AUTO_INCREMENT,
  id_funcionario INT NOT NULL,
  ds_departamento VARCHAR(45) NOT NULL,
  ds_cargo VARCHAR(45) NOT NULL,
  ds_funcao VARCHAR(45) NULL,
  FOREIGN KEY (id_funcionario) REFERENCES tb_funcionario (id_funcionario) ON DELETE CASCADE
);

 CREATE TABLE tb_consulta (
  id_consulta INT PRIMARY KEY AUTO_INCREMENT,
  id_funcionario INT NOT NULL,
  id_servico INT NOT NULL,
  id_cliente INT NOT NULL,
  vl_total DECIMAL(15,2) NOT NULL,
  tp_forma_pagamento VARCHAR(40) NOT NULL,
  nr_parcelas INT NULL,
  dt_consulta DATETIME NOT NULL,
  nr_nota INT NULL,
  ds_comentario_feedback VARCHAR(100) NULL,
  dt_inclusao DATETIME NULL,
  ds_situacao VARCHAR(45) NOT NULL,
  vl_total_por_mes DECIMAL(15,2) NULL,
  vl_desconto DECIMAL(15,2) NULL,
  vl_subtotal DECIMAL(15,2) NULL,
  FOREIGN KEY ( id_funcionario) REFERENCES tb_funcionario ( id_funcionario) ON DELETE CASCADE,
  FOREIGN KEY (id_servico) REFERENCES tb_servico ( id_servico ) ON DELETE CASCADE,
  FOREIGN KEY (id_cliente) REFERENCES tb_cliente (id_cliente) ON DELETE CASCADE
);

*/
