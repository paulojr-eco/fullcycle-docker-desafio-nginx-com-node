# Desafio Full Cycle: Nginx com Node.js

A projeto consiste em utilizar o Nginx como proxy reverso para o servidor node que interage com o banco de dados MySQL.

O banco de dados sempre irá iniciar com um registro na tabela `people`, contendo o nome "Paulo". 

Nesse contexto, existem 2 rotas de interesse:
| Rota | Função |
|---|---|
| GET '/' | Exibe a mensagem "Full Cycle Rocks!", bem como os nomes dos registros presentes na tabela `people` |
| GET '/:name' | Realiza a mesma função da rota GET '/', porém também performa a inserção de um novo registro na tabela `people`, utilizando o parâmetro `name` como sendo o texto presente na URL  |


### Rodando o app

Para acessar o app, basta seguir os passos:

```bash
# Clonar o repositório
git clone https://github.com/paulojr-eco/fullcycle-docker-desafio-nginx-com-node.git

# Subir os containers
docker-compose up -d
```

Por fim, acesse no browser a rota <a> http://localhost:8080 </a> para verificar a mensagem título e a listagem de nomes.
Ou então, acesse <a> http://localhost:8080/junior </a> (por exemplo), para inserir um novo registro.