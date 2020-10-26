 /* 
 
 CREATE DATABASE DB_ODONTO;
 
 USE DB_ODONTO;
 
 CREATE TABLE tb_login (
  id_login INT PRIMARY KEY AUTO_INCREMENT,
  ds_email VARCHAR(45) NOT NULL,
  ds_senha VARCHAR(45) NOT NULL,
  ds_perfil VARCHAR(45)  NOT NULL
  );

  INSERT INTO TB_LOGIN (DS_EMAIL, DS_SENHA, DS_PERFIL)
  VALUES ("felipecsilva207@gmail.com", "CLIENTE", "Cliente");
  
  INSERT INTO tb_login (DS_EMAIL, DS_SENHA, DS_PERFIL)
  VALUES ("caio@gmail.com", "FUNCIONARIO", "Funcionário");

  INSERT INTO tb_login (DS_EMAIL, DS_SENHA, DS_PERFIL)
  VALUES("joao@gmail.com", "FUNCIONARIO", "Funcionário");

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

 INSERT INTO tb_funcionario (ID_LOGIN, DS_TELEFONE, NM_FUNCIONARIO, DS_CPF, DS_CEP, DS_COMPLEMENTO, DS_SEXO, DS_NIS, DT_NASCIMENTO, DS_CRO, DS_LOGRADOURO, DS_ESTADO, DS_ALERGICO_MEDICACAO, DS_ALERGICO_REFEICAO, NR_RESIDENCIAL)
 VALUES (2, "11971333771", "Caio Silva", "1111111111", "123456789", "Não tem", "M", null, "1992-10-09", null, "Japaringua", "SP", null, null, 42); 

 INSERT INTO tb_funcionario (ID_LOGIN, DS_TELEFONE, NM_FUNCIONARIO, DS_CPF, DS_CEP, DS_COMPLEMENTO, DS_SEXO, DS_NIS, DT_NASCIMENTO, DS_CRO, DS_LOGRADOURO, DS_ESTADO, DS_ALERGICO_MEDICACAO, DS_ALERGICO_REFEICAO, NR_RESIDENCIAL)
 VALUES (3, "11998754456", "Joao Pedro", "22222222222", "123456789", "Não tem", "M", null, "1998-03-12", null, "Japaringua", "SP", null, null, 42); 

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

INSERT INTO tb_cliente (ID_LOGIN, NM_CLIENTE, DS_CPF, DS_TELEFONE, DS_ESTADO, DS_CIDADE, DS_CEP, NR_RESIDENICAL, DS_COMPLEMENTO, DS_SEXO, DT_NASCIMENTO, DS_LOUGRADOURO)
VALUES (1, "Felipe Lindo", "16729728192", "975554902", "SP", "São Paulo", "04855240", 41, "Não Tem", "M", "2004-10-09", "Frederick Dellius");
 
 CREATE TABLE tb_servico (
  id_servico INT PRIMARY KEY AUTO_INCREMENT,
  nm_servico VARCHAR(45) NOT NULL,
  vl_preco_servico DECIMAL(15,2) NOT NULL,
  ds_especificacoes VARCHAR(200) NOT NULL
);
INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Limpeza", 140, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Manutenção de Aparelho fixo", 75, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Clareamento", 215, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Reconstrução c/ Resina", 120, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Reconstrução c/ Resina", 120, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Canal", 279, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Limpeza de Tártaro", 160, "Não Tem");

INSERT INTO tb_servico (NM_SERVICO, VL_PRECO_SERVICO, DS_ESPECIFICACOES)
VALUES ("Tratamento de Cáries", 230, "Não Tem");


 CREATE TABLE tb_perfil_acesso (
  id_perfil_acesso INT PRIMARY KEY AUTO_INCREMENT,
  id_funcionario INT NOT NULL,
  ds_departamento VARCHAR(45) NOT NULL,
  ds_cargo VARCHAR(45) NOT NULL,
  ds_funcao VARCHAR(45) NULL,
  FOREIGN KEY (id_funcionario) REFERENCES tb_funcionario (id_funcionario) ON DELETE CASCADE
);

INSERT INTO tb_perfil_acesso (ID_FUNCIONARIO, DS_DEPARTAMENTO, DS_CARGO, DS_FUNCAO)
VALUES (1, "Não Sei", "Secretária", "Marcar Consultas");

INSERT INTO tb_perfil_acesso (ID_FUNCIONARIO, DS_DEPARTAMENTO, DS_CARGO, DS_FUNCAO)
VALUES (2, "Não Sei", "Dentista", "Fazer Consultas");

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
