
# Como rodar a aplicação

## Software necessários

- MongoDB
- Node.JS
- Postman, Insomia ou de preferência (Para consumir a API REST)

## Passos

- Primeiro utilize esse comando para clonar o repositório: 
```sh
 git clone https://github.com/JoaoMarcosVilela/prj-gestao2.git 
```

- Entre na pasta
```sh
cd prj-gestao2
```

- De um ```npm i``` para instalar as dependências que a aplicação utiliza

- Em seguida use ```npm start``` para rodar a aplicação

- Espera-se que aplicação rode, caso não suba, verifique se o nome do banco de dados que você criou é igual o da aplicação **banco**.

- Se correr tudo bem, vá para o seu aplicativo de consumir API REST, nesse caso será utilizado o Postman

- Insira a url que foi utilizado para o exemplo ```http://127.0.0.1:3000/api/filmes```

![Postaman](/img/Postaman1.png)

- Em seguida clique em send para enviar a requisição.

![Postaman](/img/Postaman2.png)

- Caso você não tenha nada prenchido no banco de dados retornará uma lista vazia, mas como eu já tinha realizado o cadastro de dois documentos ele me retornou os dois que tinham.

![Postaman](/img/Postaman3.png)