import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './Search.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


const theme = createTheme({
    palette: {
      primary: {
        dark: '#3b5481',
        main: '#5579B9',
        light: '#7793c7',
        contrastText: '#fff',
      }
    },
});

const Search = () => {

  const [viewResults, setViewResults] = React.useState(false);

  const inputSearchProps = {
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon/>
      </InputAdornment>
    ),
  }

const handleSearchUsers = () =>{
    setViewResults(true);
}

  const results = [
    {
      name: 'Zuleide de Camboja',
      username: 'zuzu2000',
      email: 'zuzu.letras18@gmail.com',
      course: 'Letras',
      year: '2016.2',
      avatar: 'https://img.r7.com/images/expulsoes-e-desistencia-esquenta-a-fazenda-19082020153342546'
    },
    {
      name: 'Cliede Campos',
      username: 'crecre134',
      email: 'cleideDaMassa@hotmail.com',
      course: '',
      year: '',
      avatar: 'https://i.ytimg.com/vi/8HUmgQtbOr0/maxresdefault.jpg'
    }
  ];

  return (
    <div className="Search">
      <Box sx={
        { 
          backgroundColor: '#003869',
          margin: '0 40vh',
          marginTop: '5vh',
          padding: '5vh 10vh',
          boxShadow: "3px 5px 15px 3px rgba(0,0,0,0.2)"
        }}>
          <Typography variant="h5" color="white" sx={{padding: '20px'}}>Busque por perfis de usuários:</Typography>
          <Box sx={{display: 'flex'}}>
            <ThemeProvider theme={theme}>
              <TextField
                required
                id="search-id"
                label="Digite o nome ou nome do usuário a ser procurado"
                variant="filled"
                InputProps={inputSearchProps}
                sx={{ borderRadius: '5px', backgroundColor: '#FFFFFF'}}
                fullWidth
              />
              <Button variant="contained" color="primary" sx={{marginLeft: '15px'}} onClick = {() => handleSearchUsers()}>Buscar</Button>
            </ThemeProvider>
          </Box>
      </Box>
      {viewResults && <div className='search-results'>
        <p>{results.length === 0? 'Nenhum resultado encontrado': `Foram encontrados ${results.length} usuários`}</p>
        {results.length > 0 && <List sx={{width: '100%'}}> 
          {results.map((result, id) => {
            return (
            <div>
              <ListItemButton key={id+1} sx={{width: "auto"}} onClick={() => window.location.href = `/profile/${result.username}`}>
                <ListItem alignItems='flex-start' key={id+1}>
                  <ListItemAvatar>
                    <Avatar src={result.avatar}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${result.name} (${result.username})`}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{display: 'inline'}} variant="body2" component="span" color="text.primary"> E-mail: </Typography> {result.email}
                        <Typography sx={{display: 'inline', paddingLeft: '25px'}} variant="body2" component="span" color="text.primary">Curso: </Typography> {result.course}
                        <Typography sx={{display: 'inline', paddingLeft: '25px'}} variant="body2" component="span" color="text.primary">Ano: </Typography> {result.year}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </ListItemButton>
              <Divider variant="middle" />
            </div>
            )
          })}
        </List> }
      </div>
      }
    </div>
  );
}

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
