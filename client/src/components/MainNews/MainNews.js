import React, { useState, useEffect } from "react";
import "./MainNews.css";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import getNoticias from "../../functions/getNoticias";

const MainNews = () => {
  const [state, setState] = React.useState();

  useEffect(() => {
    const fetchNews = async () => {
      let response = await getNoticias();
      let dict = {
        category: response.categoria,
        title: response.descricao,
        dateDay: response.dia,
        dateMonth: response.mes,
        url: response.link,
      };
      setState(response.json);
      console.log(response);
    };
    fetchNews();
  },[]);
  /*const handleLogin = async (event) => {
    event.preventDefault();
    let response = await getNoticias();
      setState({
        category : "", 
        title : "",
        dateDay : "",
        dateMonth : "aaaaaaa",
        url:'aaaaaa',
      });
    console.log(response);
  };*/
  console.log(state);
  const newsCarsExample = [
    {
      category: "asGraduaçãoaad",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
    {
      category: "Graduação",
      title:
        "Edital seleciona alunos especiais para Mestrado em Automação e Sistemas",
      dateDay: "23",
      dateMonth: "dez",
      url: "https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-",
    },
  ];

  return (
    <div className="MainNews">
      <Divider textAlign="left">
        <Typography variant="h4" sx={{ padding: "20px", color: "#5579b9" }}>
          Últimas Notícias
        </Typography>
      </Divider>
      <Grid spacing={0} direction="row" alignItems="flex-start" container>
        {newsCarsExample.map((newsCard, id) => {
          return (
            <Grid item key={id}>
              <NewsCard {...newsCard} className="news"></NewsCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

MainNews.propTypes = {};

MainNews.defaultProps = {};

export default MainNews;
