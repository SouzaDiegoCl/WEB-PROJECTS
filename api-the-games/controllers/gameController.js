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
//Função para Atualizar o game
const updateGame = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      //Mesma coisa que const title = req.body.title
      const { title, platform, year, price } = req.body;
      await gameService.update(id, title, platform, year, price);
      res.sendStatus(200); //Código 200 OK: Requisição bem sucedida
    } else {
      res.sendStatus(400); //Código 400 (Bad Request): Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno do servidor." });
  }
};

//Função para buscar único jogo
const geOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);

      if (!game) {
        res.sendStatus(404); //Código 404 NotFound
      } else {
        res.status(200).json(game);    
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { getAllGames, createGame, deleteGame, updateGame };
