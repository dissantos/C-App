import React, { useState, useEffect } from "react";
import "./MainNews.css";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import getNoticias from "../../functions/getNoticias";

const MainNews = () => {
  const [state, setState] = useState([]);
  const [test,setTest] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      let response = await getNoticias();
      let obj = [];
      response.forEach(e => {
        const news = {
          category: e.categoria,
          title: e.descricao,
          dateDay: e.dia,
          dateMonth: e.mes,
          url: e.link,
        }
        obj.push(news);
      })
      setTest('teste1');
      setState(obj);
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

  return (
    <div className="MainNews">
      <Divider textAlign="left">
        <Typography variant="h4" sx={{ padding: "20px", color: "#5579b9" }}>
          Últimas Notícias
        </Typography>
      </Divider>
      <Grid spacing={0} direction="row" alignItems="flex-start" container>
        {state.map((newsCard, id) => {
          return (
            <Grid item key={id}>
              <NewsCard {...newsCard} className="news"></NewsCard>
            </Grid>
          );
        })}
      </Grid>
      {state.categoria}
      {test}
    </div>
  );
};

MainNews.propTypes = {};

MainNews.defaultProps = {};

export default MainNews;
