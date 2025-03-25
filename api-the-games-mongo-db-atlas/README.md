# API de Jogos conectada com BD na nuvem 

## Como rodar projeto
1. 📥 Clonar Repositório
```cmd
git clone https://github.com/SouzaDiegoCl/WEB-PROJECTS.git
```
2. 📄  adicionar arquivo .env na raiz do projeto (Mesmo nível que o index.js)
```cmd
C:\WEB-PROJECTS\api-the-games-mongo-db-atlas\
├── controllers
├── .env.example
├── .env  # 👉 Arquivo de vaiáveis de ambiente
├── index.js
├── db.connections.js
└── README.md

```
3. 🔐 Preencher arquivo .env com as variáveis de acordo com .env.example</br>
```.env
DB_USER=nomeDeUsuario
DB_PASSWORD=senhaDaConexao
```

4. 📦 Baixar pacotes de depnedências
```powershell
npm i
```

5. ▶️ Iniciar a aplicação
```
npm start
```

