# Desafio Accenture - Frontend
Leonardo G. F. Rodrigues 

leonardogfrodrigues@gmail.com

### :memo: Descrição
A aplicação consiste em uma tela que contém informações gráficas resultantes de uma tabela de dados, tais quais são: Data, Demanda, Capacidade, Atendimento Planejado, Atendimento Realizado e Desvio. 

O gráfico mostra a diferença entre Capacidade e Atendimento Realizado de acordo com a data (definida em mês e ano).

__________________

### :computer: Instalação de dependências necessárias 

```
npm install -s express
```
```
npm install -s bootstrap
```
```
npm install -g nodemon
```
__________________
### :gear: Execução
Posteriormente, basta executar o Dockerfile da aplicação com os comandos:

```
docker build -t dashboard-front .
```

```
docker run -p 4004:4004 -it dashboard-front
```