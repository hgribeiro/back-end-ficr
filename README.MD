## instalar backend

yarn init -y

yarn add express

yarn add @types/express -D

## configurando typescript e o IMPORT

yarn add typescript -D

# connvertendo para que o node entenda

yarn tsc --init

mudar no tsconfig para es2017
yarn add ts-node-dev -D

## configurando no packege.json - criar script

"scripts":{
"dev": "ts-node-dev --transpile-only --ingnore-watch node_modules src/server.ts"
// esse linhas vai acelerar o start do servidor
}

## instalando banco de dados

# yarn add typeorm sqlite3

## criando a migration

# yarn typeorm migration:create -n create_orphanages

## executando a migration

# yarn typeorm migration:run

## exluindo a tabela

# yarn typeorm migration:revert

## criando a tabela images

# yarn typeorm migration:create -n create-images

## biblioteca para oploud de imagem

# yarn add multer

## tenho que instalat multer com -D

# yarn add @types/multer -D

### para validacao de erros

## yarn add express-async-errors

## modulo de validação yup

# yarn add yup

### instalar yarn add @types/yup -D

## instalr cors --

# yarn add cors

# yarn add @types/cors -D

## routes

# yarn add react-router-dom

###### tenho que add para routes

# yarn add @types/react-routes-dom -d

###### conectando front backend

## usar axios

# yarn add axios

# 1 cria a pasta
