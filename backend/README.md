Para rodar a API realize os seguintes comando no CMD (Command Prompt do Winsdows):
- Abra o CMD na raiz dessa aplicação
- Para rodar a aplicação em desenvolvimento dê o comando "npm run dev"
- Para rodar a aplicação em produção dê o comando "npm start"
Obs: Certifique-se de que os pacotes do node estão instalados, se estiverem terá pasta "node_modules" na raiz dessa aplicação.

Instaladores necessários para rodar o backend:
- Node (v18.17.0)
- Git version 2.41.0.windows.3
- Docker version 24.0.2, build cb74dfc -> Instalar Subsistema do Windows para Linux no terminal do Windows "wsl --update"

Também é necessário instalar os pacotes do Node JS dentro da pasta backend:
- Para entrar na pasta --> cd .\backend\
- Para gerar o nome_modules --> npm install ou npm i

Rode o MySQL na máquina e suba um container no docker com o MySQL: (ou PostgreSQL, porta 5432)
- Comando para realizar isso: docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

Obs: Nesse comando está definindo o nome da imagem como "mysql", mas pode ser qualquer um. Além disso, foi definido a senha para conexão como sendo "root", que também pode ser qualquer uma outra. Este comando também está definindo que a porta 3306 da máquina irá se conectar com a porta 3306 do container, essa é a porta padrão do MySQL. Por fim, é passado a imagem que queremos rodar que é o mysql.

Para simular um banco de dados adicione o Plugin "Database Client" no VS code, faça uma conexão com o MySQL e crie um BD, como demonsta o seguinte exemplo:
- Nesse exemplo é criado um banco de dados com nome "todolist", ele contém uam tabela com nome "tasks", e essa tabela contém alguns dados.

CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);