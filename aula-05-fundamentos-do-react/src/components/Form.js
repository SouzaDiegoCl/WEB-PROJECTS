import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //Função para evitar comportamento padrão do formulário
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(name);
    console.log(email);
    //Aqui vai a lógica para o backend, requisição post por exemplo
    e.target.reset();
  }

  return (
    <>
      <h1>Formulário:</h1>
      <br />
      <form action="text" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Evento é objeto, tem valores como target
        e.target.value => pega o valor do input
        */}
        <br />
        <input
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
        <br />
        {/* Exibindo os estados */}
        <span>{name}</span>
        <br />
        <span>{email}</span>
      </form>
    </>
  );
};

export default Form;
