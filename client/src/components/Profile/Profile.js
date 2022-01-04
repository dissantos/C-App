import React from "react";
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

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

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
          <Grid item xs={5}>
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
          <Grid item xs={5}>
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
                defaultValue="Nome do usuário"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Matrícula"
                defaultValue="20181234567"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box>
              <h5>Discussões</h5>
              <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary="Tópico 1" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText primary="Tópico 2" />
                </ListItemButton>
              </List>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Fechar
                  </Button>
                </DialogActions>
              </BootstrapDialog>

              <div className="buttons">
                <Button variant="contained">Sair</Button>
              </div>
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
