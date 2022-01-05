import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import ImageUploading from 'react-images-uploading';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import './SignUp.css';

const SignUp = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
    confirmPassword: '',
    isIncorrectPassword: false
  });
  const [images, setImages] = React.useState([]);


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, ['isIncorrectPassword']: event.target.value !== values.password });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
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

  const inputPropsEmail = {
    endAdornment: (
      <InputAdornment position="end">
        <AlternateEmailIcon />
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

  const inputPropsConfirmPassword = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword} edge="end" >
          {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    )
  };


  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  
  return ( 
    <div className="SignUp">
      <h2>Cadastro</h2>
      <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '50ch' },
            }}
      >
        <TextField id="name-input" label="Nome completo" variant="outlined" margin='normal'/>
        <TextField id="user-input" label="Nome Usuário" variant="outlined" InputProps={ inputPropsUser } margin='normal'/>
        <TextField id="email-input" label="E-mail" variant="outlined" InputProps={ inputPropsEmail } margin='normal' type='email'/>
        <TextField id="password-input" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')} label="Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal'/>
        <TextField error={values.isIncorrectPassword} id="confirmPassword-input" type={values.showConfirmPassword ? 'text' : 'password'}  onChange={handleChangeConfirmPassword('confirmPassword')} label="Confirmar Senha" InputProps={inputPropsConfirmPassword} variant="outlined" margin='normal' />
      </Box>
      <div>
      <label>Imagem de perfil (opcional):</label>
      <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button variant="contained" color={isDragging ? 'success' : 'primary'} onClick={onImageUpload} {...dragProps}>
              Click or Drop here
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll}>Remove image</Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100px" />
                <div className="image-item__btn-wrapper">
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </div>
      <div className='buttons'>
        <Button variant="contained">Cadastrar</Button>
      </div>
    </div>
  );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
