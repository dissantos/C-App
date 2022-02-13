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
import Avatar from '@mui/material/Avatar';
import getProfile from '../../functions/getProfile';

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
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('@C-app/login')));
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
    const fetchProfile = async () => {
      if(user !== 'profile') {
        let res = await getProfile(user);
        if(res === 'error'){
          window.location.href = '/profile'
          console.log('Erro: Matricula inexistente no Banco de Dados');
        } else {
          setProfile(res[0]);
          console.log(profile);
          console.log(res[0])
        }
      }
      const id_topico = profile.id_topic;
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
      setState(obj);
    };
    fetchProfile();
  }, []);

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
              <Avatar src={profile.url} sx={{width: '15rem', height: '15rem'}}/>
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
                value={profile.nome}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Nome completo"
                value={profile.nome_completo}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Matrícula"
                value={
                  profile
                    .matricula
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Curso"
                value={
                  profile
                    .curso
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="E-mail"
                value={
                  profile
                    .email
                }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Ano de entrada"
                value={
                  profile
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
