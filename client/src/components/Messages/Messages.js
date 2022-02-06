import React from "react";
import { TextField } from "@material-ui/core";

const Messages = () => {
  return (
    <div className="messages">
      <div className="category calendars">
        <p className="message logged">
          O calendário 2021/2 já está disponível.
        </p>
        <p className="message">O calendário sofreu alterações.</p>
        <p className="message">
          Com esta última alteração o semestre, que teria seu encerramento em
          Março, será encerrado no mês de Fevereiro de 2022, dia 14.
        </p>
        <p className="message">
          Confira os calendários atualizados para cada campus no site da
          Diretoria da Graduação.
        </p>
      </div>
      <div className="category javascript"></div>
      <div className="send-message">
        <TextField
          fullWidth
          helperText=""
          id="demo-helper-text-aligned"
          label="Digite uma mensagem"
        />
      </div>
    </div>
  );
};

export default Messages;
