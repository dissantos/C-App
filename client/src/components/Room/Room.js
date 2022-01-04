import React from "react";
import "./Room.css";

const Room = () => {
  return (
    <div className="salas">
      <header className="nome-sala">Salas de discussão</header>
      <ul>
        <li>Javascript</li>
        <li className="marcado">Calendário 2021/2 </li>
        <li>Sistemas Operacionais</li>
        <li>Computação Gráfica</li>
      </ul>
    </div>
  );
};

export default Room;
