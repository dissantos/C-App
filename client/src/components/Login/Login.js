import './Login.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Lock  from '@material-ui/icons/Lock';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';




const Login = () =>{
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const [openDialogRecovery, setOpenDialogRecovery] = React.useState(false);
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [errorAlert, setErrorAlert] = React.useState(false);

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

  const handleLogin = (event) => {
    event.preventDefault();
    const user = document.querySelector('#user-input').value;
    const password = document.querySelector('#password-input').value;
    if(user && password) {
      //TO DO

      setSuccessAlert(true);
      window.localStorage.setItem('@C-app/login',user);
      
    } else {
      setErrorAlert(true);
    }
    
  }

  useEffect(() => {
    if(successAlert) {
      setTimeout(6500);
      window.location.href = '/principal';
    }
  }, [successAlert]);

  const handleCloseDialogRecovery = () => {
    //TODO
    setOpenDialogRecovery(false);
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
          {values.showPassword ? <VisibilityOff/> : <Visibility/>}
        </IconButton>
        <Lock sx = {{paddingLeft: '20px'}}/>
      </InputAdornment>
    )
  };

  return  (
    <div className="Login">
        {successAlert && 
          <Snackbar open={successAlert} onClose={() => setSuccessAlert(false)}>
            <Alert onClose={() => setSuccessAlert(false)} color="success" variant="filled" >
              Login realizado com sucesso — redirecionando para página principal...
            </Alert>
          </Snackbar>
        }
        {errorAlert &&  
          <Snackbar open={errorAlert} onClose={() => setErrorAlert(false)}>
            <Alert onClose={() => setErrorAlert(false)} color="error" variant="filled" >
              Erro no login — usuário e/ou senha inválido(s)
            </Alert>
          </Snackbar>}
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
          <Button variant="contained" onClick={handleLogin}>Entrar</Button>
        </div>
        <div className='buttons'>
          <Button variant="contained" onClick={() => window.location.href="/signup"}>Ainda não possui uma conta? Cadastre-se aqui</Button>
        </div>
        <Link underline="hover" onClick={() => setOpenDialogRecovery(true)}>Esqueci minha senha</Link>
        
        <Dialog open={openDialogRecovery} onClose={() => setOpenDialogRecovery(false)}>
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
