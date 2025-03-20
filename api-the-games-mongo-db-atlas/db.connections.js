import mongoose from "mongoose";
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

const dbUser = process.env.DB_USER || "";
const dbPassword = process.env.DB_PASSWORD || "";

// Iniciando a conexão com o banco de dados do MongoDB
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.y6ud9.mongodb.net/api-the-games?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.log("Erro ao conectar ao banco ");
  });
  connection.on("open", () => {
    console.log("Conectado ao MongoDB com sucesso!");
  });
};

connect();

export default mongoose;
