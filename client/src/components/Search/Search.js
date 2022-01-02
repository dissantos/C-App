import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './Search.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import SearchIcon from '@mui/icons-material/Search';

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

  const inputSearchProps = {
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon/>
      </InputAdornment>
    ),
  }

  const results = [];

  return (
    <div className="Search">
      <Box sx={
        {
          backgroundColor: '#003869', 
          margin: '5vh 40vh',
          padding: '5vh 10vh'
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
            <Button variant="contained" color="primary" sx={{marginLeft: '15px'}}>Buscar</Button>
          </ThemeProvider>
        </Box>
      </Box>
    </div>
  );
}

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
