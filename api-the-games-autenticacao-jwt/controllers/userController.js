import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const JWTSecret = "secret";

//Cadastrando um usuário
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //O PROCESSO DE HASH DE SENHA SERIA FEITO AQUI
    await userService.create(name, email, password);
    res.sendStatus(201); // Cod. 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.sendStatus(500); //Erro interno do servidor
  }
};

const getOne = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.sendStatus(500); //Erro interno do servidor
  }
};

//Autenticando um usuário
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Se o e-mail não está vazio

    if (email != undefined) {
      // Busca usuário no banco
      const user = await userService.getOne(email);

      //Veriricar se usuário está cadastrado
      if ((user != undefined)) {
        //Senha correta
        if (user.password == password) {
          //Gerando o token
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (err, token) => {
              if (err) {
                res.status(400).json({ error: "Erro ao erar o token" }); //Bad Request
              } else {
                res.status(200).json({ token: token });
              }
            }
          );
          //Senha incorreta
        } else {
          res.status(401).json({ error: "Credenciais Inválidas" }); //Unauthorized
        }
        //Usuário não encontrado
      } else {
        res.status(404).json({ error: "Usuário não encontrado" }); //Not Found
      }
      //Email inválido ou vazio
    } else {
      res.status(400).json({ error: "Insira um e-mail válido" }); //Bad Request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default { createUser, loginUser };
