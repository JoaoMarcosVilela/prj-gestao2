

# Como rodar a aplicação com Vagrant

## Software necessários

- Vagrant
- Node.JS
- VirtualBox

## Passos

- Primeiro utilize esse comando para clonar o repositório: 
```sh
 git clone https://github.com/JoaoMarcosVilela/prj-gestao2.git 
```

- Entre na pasta
```sh
cd prj-gestao2
```
- Instale as dependências
```sh
npm install
```

- Execulte o comando Vagrant para subir as VMs
```sh
vagrant up
```
## Aguarde...

- Depois que o terminal ficar dessa forma, inicie outro terminal no mesmo diretório
![Terminal](/img/Terminal.png)

- Assim que iniciar um novo terminal no mesmo diretório, use esse comando para se conectar na VM1
```sh
vagrant ssh vm1
```

- Conectado na VM1, utilize esse comando para realizar um get na API da VM2
```sh
curl http://192.168.56.11:3000/api/filmes
```

- Será retornado um JSON, com os nomes dos filmes:
![TerminalGet](/img/TerminalGet.png)


# Como rodar a aplicação sem o Vagrant
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

## Passos para utilizar o método post

- Utilizaremos o mesmo postman, sendo que ao invés de usarmos o método get, agora iremos utilizar o método post.

![Postaman](/img/Postaman4.png)

- Vamos em body, depois clicamos em raw e selecionamos o tipo para JSON

![Postaman](/img/Postaman5.png)

- Utilizamos essa estrutura de prenchimento JSON, após iremos enviar em send, e esperaremos como resultado o status 201. Isso significa que foi realizado a inserção no BD.

![Postaman](/img/Postaman6.png)

## Qual workflow utilizei?

Eu utilizei o Github flow, pois ele era o melhor modelo que se enquadrava no que foi pedido, não era nada complexo, que precissase de varias branches, apenas uma para adicionar a nova feature, que era a de adicionar o metodo post, e realizando o merge com a branch main. Ficando com a seguinte estrutura:

![Github flow](/img/DiagramaGithubFlow.png)
