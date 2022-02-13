import React, { useState, useEffect } from "react";
import "./Home.css";
import DadosAcademicos from "../DadosAcademicos/DadosAcademicos";
import SuasAtividades from "../SuasAtividades/SuasAtividades";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NewsCard from "../NewsCard/NewsCard";
import getNoticias from "../../functions/getNoticias";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      let response = await getNoticias();
      let obj = [];
      let arr = [];
      response.forEach((e) => {
        const news = {
          category: e.categoria,
          title: e.descricao,
          dateDay: e.dia,
          dateMonth: e.mes,
          url: e.link,
        };
        obj.push(news);
      });
      arr = obj.splice(0,4); 
      setState(arr);
    };
    fetchNews();
  }, []);
  return (
    <>
      <Box fluid sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <h4>Notícias</h4>
              {state.map((newsCard, id) => {
                return (
                  <Grid item key={id}>
                    <NewsCard {...newsCard}></NewsCard>
                  </Grid>
                );
              })}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <SuasAtividades></SuasAtividades>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <DadosAcademicos></DadosAcademicos>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
