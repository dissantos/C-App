import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import ImageUploading from 'react-images-uploading';
import './SignUp.css';
import Lock from '@material-ui/icons/Lock';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Slider } from '@mui/material';
import setUser from "../../functions/setUser";



const SignUp = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    showConfirmPassword: false,
    confirmPassword: '',
    isIncorrectPassword: false
  });
  const [images, setImages] = React.useState([]);
  const [errorAlert, setErrorAlert] = React.useState(false);
  const [errorSignup, setErrorSignup] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [coef, setCoef] = React.useState(0);
  const [cargaObg, setCargaObg] = React.useState(0);
  const [cargaOpt, setCargaOpt] = React.useState(0);
  const [cargaComp, setCargaComp] = React.useState(0);
  
  const uploadImage = () => {
    const data = new FormData()
    if(images && images[0]){
      data.append("file", images[0].file)
      data.append("upload_preset", "capp-web")
      data.append("cloud_name","web-cefet")
      fetch("  https://api.cloudinary.com/v1_1/web-cefet/image/upload",{
        method:"post",
        body: data
      })
      .then(resp => resp.json())
      .then(data => {
        setUrl(data.url)
      })
      .catch(err => console.log(err))
    }
  }


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, ['isIncorrectPassword']: event.target.value !== values.password });
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
        <Lock />
      </InputAdornment>
    )
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleSignUp = async () => {
    const name = document.querySelector('#name-input').value;
    const user = document.querySelector('#user-input').value;
    const email = document.querySelector('#email-input').value;
    const matricula = document.querySelector('#matricula-input').value;
    const ano = document.querySelector('#ano-input').value;
    const curso = document.querySelector('#curso-input').value;
    if(name && user && email && ano && curso && matricula  && values.password && values.confirmPassword && values.confirmPassword && !values.isIncorrectPassword) {
      await uploadImage();
      const cargaTot = cargaComp + cargaObg + cargaOpt;
      const perc = cargaTot/4380;
      console.log(url);
      let res = await setUser(user, values.password, email, name, matricula, curso, ano, cargaOpt,cargaComp, cargaObg, coef, url);
      if(res === 'error') {
        setErrorSignup(true);
      } else {
        const prof = {
          nome: user,
          nome_completo: name,
          matricula: matricula,
          curso: curso,
          email: email,
          ano_entrada: ano,
          url: url,
          id_topic: matricula,
          id_msg: matricula,
          carga_horaria_opt: cargaOpt,
          carga_horaria_obrigat: cargaObg,
          coeficiente: coef,
          senha: values.password,
          carga_horaria_compl: cargaComp,
          carga_horaria_total: cargaTot,
          percent_concluido: perc,
          url: url? url : 'https://innostudio.de/fileuploader/images/default-avatar.png'
        }
        localStorage.setItem('@C-app/login',JSON.stringify(prof));
        //window.location.href = '/principal';
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
            Erro no cadastro — preencha todos os campos e coloque as senhas iguais.
          </Alert>
        </Snackbar>
      }
      {errorSignup &&  
        <Snackbar open={errorSignup} onClose={() => setErrorSignup(false)}>
          <Alert onClose={() => setErrorAlert(false)} color="error" variant="filled" >
            Erro no cadastro — matrícula, email ou nome de usuário já existe no sistema.
          </Alert>
        </Snackbar>
      }
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
        <TextField id="password-input" type='password' value={values.password} onChange={handleChange('password')} label="Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal'/>
        <TextField error={values.isIncorrectPassword} id="confirmPassword-input" type='password'  onChange={handleChangeConfirmPassword('confirmPassword')} label="Confirmar Senha" InputProps={inputPropsPassword} variant="outlined" margin='normal' />
      </Box>
      <Divider textAlign="center">
        <Typography variant='h6' sx={{padding: '20px', color: '#5579b9'}}>Dados Acadêmicos:</Typography>
      </Divider>
      <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '50ch' },
            }}
      >
        <TextField id="matricula-input" label="Matrícula" variant="outlined" margin='normal'/>
        <TextField id="curso-input" label="Curso" variant="outlined" margin='normal'/>
        <TextField id="ano-input" label="Ano de entrada" variant="outlined" margin='normal'/>
        <Typography>Carga Horária Obrigatória:</Typography>
        <Slider onChange={(e, value) => setCargaObg(value)} id="carga-obg-input" defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} step={5} max={3390}/>
        <Typography>Carga Horária Optativa:</Typography>
        <Slider onChange={(e, value) => setCargaOpt(value)} id="carga-opt-input" defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} step={5} max={540}/>
        <Typography>Carga Horária Complementar:</Typography>
        <Slider onChange={(e, value) => setCargaComp(value)} id="carga-comp-input" defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} step={5} max={450}/>
        <Typography>Coeficiente:</Typography>
        <Slider onChange={(e, value) => setCoef(value)} id="coef" defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} step={0.01} max={100}/>
        
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
                  <Button onClick={() => {
                    onImageRemove(index)
                    setImages([])
                  }}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </div>
      <div className='buttons'>
        <Button variant="contained" onClick={handleSignUp} sx={{marginBottom: '50px'}}>Cadastrar</Button>
      </div>
    </div>
  );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
