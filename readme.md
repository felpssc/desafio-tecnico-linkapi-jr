# Desafio Técnico LinkApi - Junior

## Iniciando a aplicação
Antes de mais nada, será necessário ter o [node](https://nodebr.org/) instalado em sua máquina, feito isso:

Para clonar este repositório rode o comando:
```
$ git clone https://github.com/felpssc/desafio-tecnico-linkapi-jr.git
``` 

Em seguida, entre na raiz do projeto com: `$ cd desafio-tecnico-linkapi-jr` e instale as dependências com o comando: 
``` 
$ yarn install
```
Feito isso, pode iniciar a aplicação com o comando:
```
$ yarn dev
```

---

Pronto! A aplicação já está iniciada

Rota para listagem dos usuários:
```
/api/users
```
Alguns parâmetros opcionais são: `page`, `limit`, `order` e `sortBy`, recebidos nos query params da rota.


