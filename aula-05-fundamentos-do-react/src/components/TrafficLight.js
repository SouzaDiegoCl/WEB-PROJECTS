import { useState } from "react";

const TrafficLight = () => {
  //Criando o estado para manipular as cores
  //[Color = consulta o vaalor / setColor = alterar o valor]
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Semáforo</h3>
        <br />
        <div
          style={{
            backgroundColor: color == "red" ? color : "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: color == "yellow" ? color : "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: color == "green" ? color : "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <button onClick={() => setColor("red")}>Pare!</button>
          <button onClick={() => setColor("yellow")}>Atenção!</button>
          <button onClick={() => setColor("green")}>Siga!</button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
