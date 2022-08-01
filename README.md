# Desafio_Communiverse_PHP-React
Desafio para vaga Junior/Full Dev no Comuniverse, utilizando PHP (Laravel) no backend e Javascript (React) no frontend.

## Estrutura do Projeto
O projeto foi construído utilizando PHP, Laravel, MySQL (MariaDB), Docker e Javacript/React.

## Instalação e inicialização do projeto
Inicialmente, alguns pré-requisitos são necessários para instalar o projeto:
- PHP
- Compositor
- Nó/NPM
- Janela de encaixe
- Git

Depois de confirmar que você tem os pré-requisitos ou os instalou, agora precisamos seguir as etapas de instalação:
- 1º git clone https://github.com/Uriel-David/Desafio_Comuniverse_PHP-React.git (clone repositório localmente)
- 2º composer install (use o comando na pasta raiz do projeto -> stock-app_backend)
- 3º php artisan migrate (use o comando na pasta raiz do projeto -> stock-app_backend)
- 4º php artisan db:seed (use o comando na pasta raiz do projeto -> stock-app_backend)
- 5º npm install (use o comando na pasta raiz do projeto -> stock-app_frontend)

Finalizando com sucesso esses 3 comandos o projeto será instalado corretamente, agora precisamos executar o projeto.
Antes mesmo de executar o projeto, precisamos configurar as variáveis ​​de ambiente. Então vamos criar um arquivo local com as variáveis ​​de ambiente (.env):
- 'DB_USERNAME' => 'root' (nome de usuário do banco de dados)
- 'DB_PASSWORD' => 'root' (senha do usuário do banco de dados)
- 'DB_DATABASE' => 'stock_app' (nome do banco de dados)

Agora podemos finalmente executar nosso servidor docker e servidor backend (use os comandos na pasta stock-app_backend):
- 1º docker compose up (se falhar verifique se o serviço está ativo ou instalado corretamente)
- 2º php artisan serve (use este comando após o término de todo o processo de instalação do container)

Então agora vamos rodar nosso servidor no frontend (use os comandos na pasta stock-app_backend):
- npm run start (o servidor estará inicializando e será redirecionado automaticamente para a página)

## Estrutura e recursos da página
O projeto tem basicamente 3 páginas, indexar, criar e atualizar.
- Índice: o administrador pode visualizar todos os produtos em estoque criados, tendo a opção de atualizar os eventos ou excluí-los.
- Criar: É possível criar um novo produto através de um formulário e assim salvar as informações no banco de dados, para serem visualizadas no índice.
- Atualização: É possível atualizar o processo através de um formulário e atualizar as informações no banco de dados, para serem visualizadas no índice.

 ----------------------------------------------------- VERSION ENGLISH -----------------------------------------------------

# Challenge_Communiverse_PHP-React
Challenge for Junior/Full Dev vacancy at Comuniverse, using PHP (Laravel) on the backend and Javascript (React) on the frontend.

## Project Structure
The project was built using PHP, Laravel, MySQL (MariaDB), Docker and Javacript/React.

## Project Installation and Startup
Initially, some prerequisites are needed to install the project:
- PHP
- Composer
- Node/NPM
- Docker
- Git

After confirming that you have the prerequisites or have installed them, we now need to follow the installation steps:
- 1º git clone https://github.com/Uriel-David/Desafio_Comuniverse_PHP-React.git (clone repository locally)
- 2º composer install (use command in project root folder -> stock-app_backend)
- 3º php artisan migrate (use command in project root folder -> stock-app_backend)
- 4º php artisan db:seed (use command in project root folder -> stock-app_backend)
- 5º npm install (use command in project root folder -> stock-app_frontend)

Successfully finishing these 3 commands the project will be installed correctly, now we need to run the project.
Even before running the project, we need to configure the environment variables. So we will create a local file with the environment variables (.env):
- 'DB_USERNAME' => 'root' (database username)
- 'DB_PASSWORD' => 'root' (database user password)
- 'DB_DATABASE' => 'stock_app' (database name)

Now we can finally run our docker server and backend server (use the commands in the stock-app_backend folder):
- 1º docker compose up (if it fails check if the service is up or installed correctly)
- 2º php artisan serve (use this command after the entire container installation process is finished)

So now let's run our server on the frontend (use the commands in the stock-app_backend folder):
- npm run start (the server will be initializing and will be automatically redirected to the page)

## Page Structure and Features
The project has basically 3 pages, index, create and update.
- Index: the admin can visualize all products in stock created, having the option to update the events or delete them.
- Create: It is possible to create a new product through a form and thus save the information in the database, to be visualized in the index.
- Update: It is possible to update the procuct through a form and update the information in the database, to be visualized in the index.
