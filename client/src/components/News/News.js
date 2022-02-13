import React, { useEffect, useState } from 'react';
import './News.css';
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';
import parse from 'html-react-parser';
import getNoticia from "../../functions/getNoticia";

const News = (props) => {
  const params = window.location.href.split("/");
  const path = params[params.length - 2];
  const [state, setState] = useState({
    title: '',
    subtitle: '',
    date: '',
    content: []
  });


  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNoticia(path);
      const newsContent = {
        title: response.title,
        subtitle: response.subtitle,
        date: response.date,
        content: response.content
      }
      setState(newsContent)
    }
    fetchNews();
  },[])

  return (
    <div className="News">
      <Divider textAlign="center">
        <Typography variant='h5' sx={{padding: '20px', color: '#5579b9'}}>{state.title}</Typography>
      </Divider>
      <h3 className="subtitle">{state.subtitle}</h3>
      <h5 className="date">{state.date}</h5>
      <div className="content">
        {state.content.map(el => {
          return parse(el)
        })}
      </div>
    </div>
  );
}

News.propTypes = {};

News.defaultProps = {};

export default News;
