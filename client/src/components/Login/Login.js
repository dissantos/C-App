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


import './Login.css';

const Login = () =>{
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

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
        <div class='buttons'>
          <Button variant="contained">Entrar</Button>
        </div>
        <div class='buttons'>
          <Button variant="contained">Ainda não possui uma conta? Cadastre-se aqui</Button>
        </div>
          <Link underline="hover">Esqueci minha senha</Link>      
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
