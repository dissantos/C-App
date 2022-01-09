import * as React from "react";
import "./Room.css";

const Room = () => {
  return (
    <div className="salas">
      <p className="nome-sala">Salas de discussão</p>
      <ul>
        <li>Javascript</li>
        <li className="marcado">Calendários</li>
        <li>Sistemas Operacionais</li>
        <li>Computação Gráfica</li>
      </ul>
    </div>
  );
};

export default Room;
