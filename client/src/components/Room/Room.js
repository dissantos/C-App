import React, { useState, useEffect } from "react";
import "./Room.css";
import getTodosOsTopicos from "../../functions/getTodosOsTopicos";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Messages from "../Messages/Messages";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import getMensagens from "../../functions/getMensagens";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import addMensagens from "../../functions/addMessage";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Room = () => {
  const [state, setState] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [mensagemCompleta, setMensagemCompleta] = useState([]);
  const [mensagem1, setMensagem1] = React.useState("");
  const [id_topic_user, setIdTopicUser] = React.useState("");
  const [id_topic, setIdTopic] = React.useState("");
  const [tamanho, setTamanho] = React.useState(0);
  const [mensagemPrincipalCor, setmensagemPrincipalCor] = React.useState("");

  const handleNewMessage = async () => {
    let novaMensagem = document.querySelector(
      "#demo-helper-text-aligned"
    ).value;
    let id = tamanho + 1;
    console.log(tamanho);
    let nome_autor = JSON.parse(window.localStorage.getItem("@C-app/login"))
      .nome_completo;
    let conteudo = novaMensagem;
    let today = new Date();
    let day = today.getDate();
    let mes = today.getMonth() + 1;
    let ano = today.getFullYear();
    let hora = today.getHours();
    let min = today.getMinutes();
    let seg = today.getSeconds();
    let data = `${ano}-${mes}-${day}T${hora}:${min}:${seg}`;
    let id_topico = id_topic;
    let id_mensagem = JSON.parse(window.localStorage.getItem("@C-app/login"))
      .id_msg;
    if (novaMensagem) {
      let response = await addMensagens(
        id,
        nome_autor,
        conteudo,
        data,
        id_topico,
        id_mensagem
      );
    }
    let limpa = document.querySelector("#demo-helper-text-aligned");
    limpa.value='';
    window.location.reload();
  };

  const handleListItemClick = (
    event,
    index,
    mensagem,
    nome_topic,
    id_topic_user,
    id_topic
  ) => {
    setSelectedIndex(index);
    setOpen(true);
    setIdTopic(id_topic);
    setIdTopicUser(id_topic_user);
    setMensagem1(mensagem);
    console.log(new Date());
    let aux =
      JSON.parse(window.localStorage.getItem("@C-app/login")).id_topic ==
      id_topic_user
        ? "message logged"
        : "message";
    setmensagemPrincipalCor(aux);

    const userIdTopic = id_topic;
    const fetchMensagens = async () => {
      let response = await getMensagens(userIdTopic);
      console.log(response);
      let obj = [];
      response.forEach((e) => {
        const mensagemForum = {
          id: e.id,
          nome_autor: e.nome_autor,
          conteudo: e.conteudo,
          data: e.data,
          id_topic: e.id_topic,
          id_mensagem: e.id_mensagem,
        };
        obj.push(mensagemForum);
      });
      console.log(obj);
      setMensagemCompleta(obj);
      setTamanho(obj.length);
    };
    fetchMensagens();
  };

  useEffect(() => {
    const fetchTopicos = async () => {
      let response = await getTodosOsTopicos();
      console.log(response);
      let obj = [];
      response.forEach((e) => {
        const topico = {
          id_topic: e.id_topic,
          mensagem: e.mensagem,
          categoria_topic: e.categoria_topic,
          nome_topic: e.nome_topic,
          id_topic_user: e.id_topic_user,
        };
        obj.push(JSON.stringify(topico));
      });
      setState(obj);
    };
    fetchTopicos();
  }, []);

  return (
    <Box fluid sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <p className="nome-sala">Salas de discussão</p>
            <List
              className="nome-sala1"
              component="nav"
              aria-label="secondary mailbox folder"
            >
              {state.map((nome_topic, id) => {
                return (
                  <ListItemButton
                    key={id}
                    selected={selectedIndex === 2}
                    onClick={(event) =>
                      handleListItemClick(
                        event,
                        2,
                        JSON.parse(nome_topic).mensagem,
                        JSON.parse(nome_topic).nome_topic,
                        JSON.parse(nome_topic).id_topic_user,
                        JSON.parse(nome_topic).id_topic
                      )
                    }
                  >
                    <ListItemText primary={JSON.parse(nome_topic).nome_topic} />
                  </ListItemButton>
                );
              })}
            </List>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Messages
              selected={selectedIndex === 2}
              mensagem={mensagem1}
              cor={mensagemPrincipalCor}
            ></Messages>

            {mensagemCompleta.map((mensagemToda, id) => {
              console.log(mensagemToda);
              let aux =
                mensagemToda.id_mensagem ==
                JSON.parse(window.localStorage.getItem("@C-app/login"))
                  .id_msg
                  ? "message logged"
                  : "message";

              return (
                <Messages
                  key={id}
                  selected={selectedIndex === 2}
                  mensagem={mensagemToda.conteudo}
                  cor={aux}
                ></Messages>
              );
            })}
            <div className="category javascript"></div>
            <div className="send-message">
              <TextField
                fullWidth
                helperText=""
                id="demo-helper-text-aligned"
                label="Digite uma mensagem"
              />
              <Button variant="contained" onClick={handleNewMessage}>
                Enviar
              </Button>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Room;
