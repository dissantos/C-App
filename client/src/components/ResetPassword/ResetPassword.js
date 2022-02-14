import React from 'react';
import PropTypes from 'prop-types';
import getResetPassword from '../../functions/getResetPassword';
import './ResetPassword.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import Lock from '@material-ui/icons/Lock';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const ResetPassword = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    showConfirmPassword: false,
    confirmPassword: '',
    isIncorrectPassword: false
  });
  const [errorAlert, setErrorAlert] = React.useState(false);
  const [successAlert, setSuccessAlert] = React.useState(false);

  const params = window.location.href.split('/');
  let token = params[params.length - 1]
  if(token.startsWith('token=')){
    token = token.replace('token=','');
  }
  

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, ['isIncorrectPassword']: event.target.value !== values.password });
  };


  const inputPropsPassword = {
    endAdornment: (
      <InputAdornment position="end">
        <Lock />
      </InputAdornment>
    )
  };


  const handleSignUp = async () => {
    if(values.password && token && !values.isIncorrectPassword && values.confirmPassword) {
      let response =  await getResetPassword(token, values.password);
      if(response === 'error'){
        setErrorAlert(true);
      } else {
        setSuccessAlert(true);
      }
    } else {
      setErrorAlert(true);
    }
  }
  
  return ( 
    <div className="SignUp">
      {errorAlert &&  
        <Snackbar open={errorAlert} onClose={() => setErrorAlert(false)}>
          <Alert onClose={() => setErrorAlert(false)} color="error" variant="filled" >
            Erro no reset — senha ou token inváido.
          </Alert>
        </Snackbar>
      }
      {successAlert &&  
        <Snackbar open={successAlert} onClose={() => setSuccessAlert(false)}>
          <Alert onClose={() => setSuccessAlert(false)} color="success" variant="filled" >
            Sucesso: Senha trocada, retorne a tela de login.
          </Alert>
        </Snackbar>
      }
      <h2>Restaurar Senha</h2>
      <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '50ch' },
            }}
      >
        <TextField id="password-input" type='password' value={values.password} onChange={handleChange('password')} label="Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal'/>
        <TextField error={values.isIncorrectPassword} id="confirmPassword-input" type='password'  onChange={handleChangeConfirmPassword('confirmPassword')} label="Confirmar Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal' />
      </Box>
      
      <div className='buttons'>
        <Button variant="contained" onClick={handleSignUp} sx={{marginBottom: '50px'}}>Cadastrar</Button>
      </div>
    </div>
  );
}

ResetPassword.propTypes = {};

ResetPassword.defaultProps = {};

export default ResetPassword;
