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
  async create(title, platform, year, price) {
    console.log("Teste Service");
    try {
      const newGame = new GameRepository({
        //title : title
        title,
        platform,
        year,
        price,
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

  async update(id, title, platform, year, price) {
    try {
      await GameRepository.findByIdAndUpdate(id, {
        //title = title
        title,
        platform,
        year,
        price,        
      });
      console.log(`Dados do game atualizados com sucesso. ID = ${id}`)
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
