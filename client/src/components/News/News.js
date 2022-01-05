import React from 'react';
import PropTypes from 'prop-types';
import './News.css';
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';
import parse from 'html-react-parser';


const News = (props) => {
  const {category, title, url} = props;
  const content = `
    <h3>O content vai ser pego pelo crawler usando a url</h3>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti cum praesentium vero incidunt quod non quae, laudantium fuga eos dignissimos eum aliquam, aspernatur fugiat ipsa quos quisquam deleniti velit maiores et, eligendi consectetur numquam. Repellat fugit dolor hic veritatis voluptatibus consequuntur praesentium consectetur, labore, nihil quae itaque! Eius eum, quasi odio voluptatem voluptatum nam similique aut explicabo! Tenetur provident, reiciendis quis saepe aut modi voluptatum, blanditiis dignissimos distinctio accusantium dolores.
  `

  return (
    <div className="News">
      <Divider textAlign="left">
        <Typography variant='h4' sx={{padding: '20px', color: '#5579b9'}}>{category}</Typography>
      </Divider>
      <Typography variant='h2' sx={{padding: '20px', color: '#5579b9'}}>{title}</Typography>
      {parse(content)}
    </div>
  );
}

News.propTypes = {};

News.defaultProps = {};

export default News;
