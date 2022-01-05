import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'



const Login = () =>{
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpenDialogRecovery = () => {
    setOpen(true);
  }

  const handleCloseDialogRecovery = () => {
    setOpen(false);
  }
  
  const inputPropsUser = {
    endAdornment: (
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    )
  };
  const inputPropsPassword = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    )
  };

  return  (
    <div className="Login">
        <h2>Login</h2>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { width: '50ch' },
          }}
        >
          <TextField id="user-input" label="Usuário" variant="outlined" InputProps={ inputPropsUser } margin='normal'/>
          <TextField id="password-input" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')} label="Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal'/>
        </Box>
        <div className='buttons'>
          <Button variant="contained">Entrar</Button>
        </div>
        <div className='buttons'>
          <Button variant="contained">Ainda não possui uma conta? Cadastre-se aqui</Button>
        </div>
        <Link underline="hover" onClick={handleOpenDialogRecovery}>Esqueci minha senha</Link>
        
        <Dialog open={open} onClose={handleCloseDialogRecovery}>
          <DialogTitle>Recuperação de Senha</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Informe seu e-mail utilizado no cadastro e, caso conste nos sistemas, enviaremos uma mensagem com os próximo passo para redifinir a sua senha.
            </DialogContentText>
            <TextField id="user-input" type='email' label="E-mail" variant="outlined" fullWidth margin='normal'/>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseDialogRecovery}>Enviar</Button>
          </DialogActions>
        </Dialog>

    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
