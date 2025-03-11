import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);
// Endpoint para cadastrar novo jogo
gameRoutes.post("/games", gameController.createGame);
// Endpoint para deletar jogo pelo id
// Se o param fosse opcional seria :id?
gameRoutes.delete("/games/:id", gameController.deleteGame);


export default gameRoutes;
