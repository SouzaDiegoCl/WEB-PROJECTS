import { useState } from "react";

const Counter = () => {
  //   let x = 0;
  //   console.log(x);
  // Criando o estado para o contador
  // [consultar o valor, função para alterar o estado]
  const [count, setCount] = useState(0);
  const [textErro, setTextErro] = useState("");

  const incrementar = () => {
    setCount((prev) => prev + 1);
  };

  const zerar = () => {
    setCount(0);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setTextErro("Não é possível decrementar count. Valor já está zerado");
      setTimeout(() => setTextErro(""), 2000);
    }
  };

  return (
    <>
      <div>
        {/* <p>Contador: {x}</p> */}
        {/* <button onClick={() => (x = x + 1)}>Aumentar</button> */}
        <p>Contador: {count}</p>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={zerar}>Zerar</button>
        <button onClick={decrementar}>Decrementar</button>
        <span>{textErro}</span>
      </div>
    </>
  );
};
export default Counter;
