import User from "../models/Users.js";

class userService {
  //Método para cadastrar um usuário
  async create(name, email, password) {
    try {
      const newUser = new User({ name, email, password });

      await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(email) {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("User não encontrado");
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userService();
