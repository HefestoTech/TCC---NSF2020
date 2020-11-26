# Instituto Nossa Senhora de Fátima 

# Hefesto Tech 

Integrantes: Mateus Ferreira Nº22, Arthur Figueredo Nº3, Felipe Conceição Nº34, Matheus Pinheiro Nº26 

Professor(a): Bruno Oliveira 

Links: [GitHub](https://github.com/HefestoTech/TCC---NSF2020 ) e [Trello](https://trello.com/b/Rf6Ns3Ft/tcc-nsf-2020)  



## Índice 

 - Caso de Uso
    - Caso de Uso: Funcionário 
    - Caso de Uso: Cliente 

 - MER 
    - MER Completo
  
 - Prototipações
    - Home
    - Cadastrar Conta 
    - Login 
    - Menu Cliente
    - Agendar Consulta Cliente 
    - Ver Agendamentos Cliente
    - Menu Funcionário
    - Agendar Consulta Funcionário 
    - Ver Agendamentos Funcionário
    - Avaliar Consulta 
    - Remarcar Consulta 
    - Relatório
    - 
  - Rotas do Sistema Testadas

## Caso de Uso
### Funcionário
![](https://i.imgur.com/LDQ68ym.png)
 - UC001 - O Funcionário pode ser cadastrar no sistema.
 - UC002 - O Funcionário pode logar no sistema.
 - UC003 - O Funcionário pode agendar uma consulta para algum cliente.
   - UC003.1 - O Funcionário pode escolher o dentista que estiver disponivel para realizar a consulta.
   - UC003.2 - O Funcionário pode escolher um horário para a consulta.
   - UC003.3 - O Funcionário pode ver o valor total da consulta.
 - UC004 - O Funcionário pode ver as suas consultas ja agendadas.
 - UC005 - O Funcionário pode cancelar uma consulta.
 - UC006 - O Funcionário pode remarcar a consulta
 - UC007 - O Funcionário pode mudar a situação de um agendamento para "Realizado" ou "O Cliente não compareceu".

### Cliente
![](https://i.imgur.com/r7LYpQn.png)
 - UC001 - O Cliente pode ser cadastrar no sistema.
 - UC002 - O Cliente pode logar no sistema.
 - UC003 - O Cliente pode agendar uma consulta para algum cliente.
   - UC003.1 - O Cliente pode escolher o dentista que estiver disponivel para realizar a consulta.
   - UC003.2 - O Cliente pode escolher um horário para a consulta.
   - UC003.3 - O Cliente pode ver o valor total da consulta.
 - UC004 - O Cliente pode ver as suas consultas ja agendadas.
 - UC005 - O Cliente pode cancelar a consulta.
 - UC006 - O Cliente pode remarcar a consulta.
 - UC007 - O Cliente pode avaliar a consulta, depois de realizada.
   - UC007.1 - Para avaliar é obrigatório dar uma nota de 0 a 5 para a consulta.
   - UC007.2 - O Cliente pode opcionalmente fazer um comentário sobre a consulta. 

    




## MER
![](https://i.imgur.com/2QNLO41.png)
O MER possui 6 tabelas. São elas:
 - tb_cliente
 Essa tabela guarda os dados dos clientes do sistema. Leva como chave estrangeira a tb_login, sendo uma relação de 1 para 1.
 - tb_funcionario
 Essa tabela guarda os dados dos funcionários do sistema. Leva como chave estrangeira a tb_login, sendo uma relação de 1 para 1.
 - tb_login
 Guarda as informações do login dos usuarios, que podem ser tanto de um funcionário, como de um cliente.
 - tb_perfil_acesso
 Guarda as informações do acesso permitido do cliente, especificando em qual área da empresa ele trabalha. Leva a tb_funcionario como chave estrangeira, em uma relação de 1 para 1.
 - tb_servico
 Essa tabela guarda as informações dos tipos de serviços prestados pela empresa.
 - tb_consulta
 -Essa tabela gurda as informações das consultas que ja foram ou serão realizadas. Leva chave estrangeira da tb_cliente, em uma relação de 1 para N. Leva chave estrangeira da tb_serviço em uma relação de 1 para N. Leva como chave estrangeira da tb_funcionario em uma relação de 1 para N.
 
 ## Protótipos
 ### HOME
 ![](https://i.imgur.com/p2raHoD.jpg)

 ### Login
 ![](https://i.imgur.com/3qUuYaF.jpg)
 
 ### Cadastrar Conta no Sistema
 ![](https://i.imgur.com/UlAmM23.jpg)

 ### Menu Cliente
 ![](https://i.imgur.com/pw8dwHt.jpg) 

 ### Agendar Nova Consulta - CLiente
 ![](https://i.imgur.com/5bteHqg.jpg)
 
  ### Ver os Agendamentos - Cliente 
 ![](https://i.imgur.com/XXkS6vu.jpg)
 
 ### Menu Funcionário
 ![](https://i.imgur.com/W2AWEzW.jpg)

 ### Agendar Nova Consulta - Funcionário
 ![](https://i.imgur.com/P4RWXty.jpg)
 
 ### Ver os Agendamentos - Funcionário
 ![](https://i.imgur.com/Jv9ToTq.jpg)
 
 ### Avaliar Consulta
 ![](https://i.imgur.com/0YxRCbP.jpg)
 
 ### Remarcar Consulta
 ![](https://i.imgur.com/qyQ6JyB.jpg)
 
 ### Relatórios
 ![](https://i.imgur.com/3BN8uwq.jpg)
 
 ### Sobre Nós Odonto
 ![](https://i.imgur.com/tkvt0UL.jpg)

 ### Sobre Nós HefestoTech
 ![](https://i.imgur.com/wAWlGZO.jpg)


 ### Aplicativo Móvel
 ![](https://i.imgur.com/Vs7jyCU.jpg)



 ## Rotas Testadas
 - [POST]  /Login 
  Essa rota permite que o cliente ou o funcionário loguem no sistema.
 Chamada
 ![](https://i.imgur.com/uu2A4HY.png)
 Resposta
 ![](https://i.imgur.com/Txy5ub6.png)
 
 - [GET] /agendamento/PegarServicos
 Essa rota pega todos os serviços que estão cadastrados em nosso banco de dados.
 Chamada
 ![](https://i.imgur.com/wp4rlFr.png)
 Resposta
 ![](https://i.imgur.com/mfBIl5l.png)

 
 - [GET] /agendamento/destista/disponivel
 Pega os dentistas disponiveís a partir de um horário passado.
 Chamada
 ![](https://i.imgur.com/lKNd3E2.png)
 Resposta
 ![](https://i.imgur.com/joIitCH.png)

- [GET] /agendamento/valordaconsulta
  Pega as informações sobre o preço da consulta de acordo com o que foi passado.
  Chamada
  ![](https://i.imgur.com/AGDDYSv.png)
  Resposta
  ![](https://i.imgur.com/Qdffo8l.png)
  
 - [POST] /agendamento/cadastrar/cliente
 Agenda uma nova consulta de acordo com as informações passadas pelo cliente.
 Chamada
 ![](https://i.imgur.com/NOah1K3.png)
 Resposta
 ![](https://i.imgur.com/jjqR9jt.png)

- [PUT] /agendamento/remarcar
 Essa rota remarca uma consulta.
 Chamada
 ![](https://i.imgur.com/SdNFYx6.png)
 Resposta
 ![](https://i.imgur.com/PGXXzBq.png)

- [POST] /agendamento/cadastrar/funcionario
  Agenda uma nova consulta de acordo com as informações passadas pelo funcionário.
  Chamada
  ![](https://i.imgur.com/NR36f4g.png)
  Resposta
  ![](https://i.imgur.com/dd0Wgi1.png)

- [PUT] /agendamento/cancelar/{idConsulta}
  Essa rota cancela um agendamento, mas invés de excluir da tabela, a situação é mudada para "cancelado".
  Chamada
  ![](https://i.imgur.com/SEWj7nb.png)
  Resposta
  ![](https://i.imgur.com/wfCH833.png)

- [PUT] /agendamento/alterar/situacao/{idConsulta}/?novaSituacao={Situacao}
 A situação de uma determinado agendamento é alterado. Só o funcionário tem permissão para fazer isso. A situação pode ser mudada para "Concluido" ou "Não Compareceu".
 Chamada
 ![](https://i.imgur.com/OmJJaAD.png)
 Resposta
 ![](https://i.imgur.com/t3sXoTX.png)
 
 - [POST] /cadastro
 Cadastra um novo cliente no sistema.
 Chamada
 ![](https://i.imgur.com/sfIdtbL.png)
  Resposta
 ![](https://i.imgur.com/tzJkxQL.png)
 
 - [GET] /consultaagendamento/agendados/cliente/{idCliente}
 Pega as consultas de um cliente, separando por "Concluidos", "Agendados", "Não Compareceu" e "Cancelados".
 Chamada
 ![](https://i.imgur.com/vVJ89xc.png)
 Resposta
 ![](https://i.imgur.com/ZNhfUlw.png)
 ![](https://i.imgur.com/KK08fah.png)
 
 - [GET] /consultaagendamento/agendados/filtro?nome={nome}&servico={servico}&doutor={doutor}&data={data}&situacao={situacao}
 Essa rota pega as consultas a partir dos filtros passado pelo funcionário
 Chamada
 ![](https://i.imgur.com/u0LBE45.png)
 Resposta
 ![](https://i.imgur.com/XE4NmJu.png)
 
- [POST] /feedback
O cliente tem a opção de avaliar a consulta, após o funcionário mudar a situação para "Concluido"
Chamada
![](https://i.imgur.com/qaKSTpn.png)
Resposta
![](https://i.imgur.com/TNAH82X.png)

 
 









