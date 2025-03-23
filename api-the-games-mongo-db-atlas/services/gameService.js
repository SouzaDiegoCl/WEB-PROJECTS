import GameRepository from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  // //sucesso
  // }).catch(error => {
  // // falha
  // })

  // async / await
  async getAll() {
    try {
      const games = await GameRepository.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  //Função para cadastrar jogos
  async create(title, year, price, descriptions) {
    try {
      const newGame = new GameRepository({
        //title : title
        title,
        year,
        price,
        descriptions,
      });
      //Método do mongoose para cadastrar .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  //Função para deletar jogos
  async delete(id) {
    try {
      await GameRepository.findByIdAndDelete(id);
      console.log(`Game Excluded - Id: ${id}}`);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, title, year, price, descriptions) {
    try {
      await GameRepository.findByIdAndUpdate(id, {
        //title = title
        title,
        year,
        price,
        descriptions,
      });
      console.log(`Dados do game atualizados com sucesso. ID = ${id}`);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const game = await GameRepository.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
