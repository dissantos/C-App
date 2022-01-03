import React from "react";
import "./Room.css";
import { ChatEngine } from "react-chat-engine";

const Room = () => {
  return (
    <body>
      <div>
        <header className="nome-sala">Salas de discussão</header>
        <ul>
          <li>Javascript</li>
          <li className="marcado">Calendário 2021/2 </li>
          <li>Sistemas Operacionais</li>
          <li>Computação Gráfica</li>
        </ul>
      </div>
    </body>
  );
};

export default Room;
