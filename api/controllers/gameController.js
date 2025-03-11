import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//Função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    const { title, platform, year, price } = req.body;
    await gameService.create(title, platform, year, price);
    console.log("Teste Controller");

    res.sendStatus(201); //Código 201 Created
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      gameService.delete(id);
      res.sendStatus(204); //No content 204
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
export default { getAllGames, createGame, deleteGame };
