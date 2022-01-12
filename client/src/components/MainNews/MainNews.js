import React from 'react';
import PropTypes from 'prop-types';
import './MainNews.css';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const MainNews = () => {
  const newsCarsExample = [
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
    {
      category : "Graduação", 
      title : "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay : "23",
      dateMonth : "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"
    },
  ];

  return (
    <div className="MainNews">
      <Divider textAlign="left">
        <Typography variant='h4' sx={{padding: '20px', color: '#5579b9'}}>Últimas Notícias</Typography>
      </Divider>
      <Grid spacing={0} direction="row" alignItems="flex-start"  container>
        {newsCarsExample.map((newsCard, id) => {
          return (
            <Grid item key={id}>
              <NewsCard {...newsCard} className="news"></NewsCard>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

MainNews.propTypes = {};

MainNews.defaultProps = {};

export default MainNews;
