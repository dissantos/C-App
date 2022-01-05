import * as React from "react";
import "./Room.css";
import { TextField } from "@material-ui/core";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Room = () => {
  return (
    <div className="salas">
      <header className="nome-sala">Salas de discussão</header>
      
      <TextField
        id="buscar-sala"
        label="Busque ou crie uma sala"
        variant="outlined"
      />
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab size="small" color="primary" aria-label="add" accessibilityLabel="criar uma sala de discussão">
          <AddIcon />
        </Fab>
      </Box>
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
