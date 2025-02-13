import express from "express";

//Config Express
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      `Servidor Iniciado com Sucesso na porta http://localhost:${port}.`
    );
  }
});

app.get("/", (req, res) => {
  res.send("aa");
});
