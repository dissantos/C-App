import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SvgIcon from "@material-ui/core/SvgIcon";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import getTopico from "../../functions/getTopico";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Profile = (props) => {
  const [state, setState] = useState([]);
  const [test, setTest] = useState("");

  const [open, setOpen] = React.useState(false);
  const params = window.location.href.split("/");
  const user = params[params.length - 1];

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const handleListItemClick = (event, index, value, titulo) => {
    setSelectedIndex(index);
    setOpen(true);
    setContent(value);
    setTitle(titulo);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("@C-app/login");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchTopico = async () => {
      const id_topico = JSON.parse(
        window.localStorage.getItem("@C-app/login")
      )[0].id_topic;
      let response = await getTopico(id_topico);
      let obj = [];
      response.forEach((e) => {
        const topico = {
          id_topic: e.id_topic,
          mensagem: e.mensagem,
          categoria_topic: e.categoria_topic,
          nome_topic: e.nome_topic,
        };
        obj.push(JSON.stringify(topico));
      });
      setTest("teste1");
      setState(obj);
    };
    fetchTopico();
  }, []);

  function UserIcon(props) {
    return (
      <SvgIcon {...props}>
        <AccountCircleIcon></AccountCircleIcon>
      </SvgIcon>
    );
  }

  return (
    <div className="Profile">
      <h2>Profile</h2>
      <Box fluid sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 2,
                },
              }}
            >
              <UserIcon sx={{ fontSize: 150 }} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-read-only-input"
                label="Nome"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .nome
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Nome completo"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .nome_completo
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Matrícula"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .matricula
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Curso"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .curso
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="E-mail"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .email
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Ano de entrada"
                defaultValue={
                  JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
                    .ano_entrada
                }
                InputProps={{
                  readOnly: true,
                }}
              />

              <h5>Discussões</h5>
              <List component="nav" aria-label="secondary mailbox folder">
                {state.map((nome_topic, id) => {
                  return (
                    <ListItemButton key={id}
                      selected={selectedIndex === 2}
                      onClick={(event) =>
                        handleListItemClick(
                          event,
                          2,
                          JSON.parse(nome_topic).mensagem,
                          JSON.parse(nome_topic).nome_topic
                        )
                      }
                    >
                      <ListItemText
                        primary={JSON.parse(nome_topic).nome_topic}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
              {state.nome_topic}
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  <span>{title}</span>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    <span>{content}</span>
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Fechar
                  </Button>
                </DialogActions>
              </BootstrapDialog>
              {user === "profile" && (
                <div className="buttons">
                  <Button variant="contained" onClick={handleLogout}>
                    Sair
                  </Button>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
