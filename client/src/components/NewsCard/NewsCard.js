import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';


const NewsCard = (props) => {
  const { category, title, dateDay, dateMonth } = props;

  return (
    <Card sx={{ width: 400 }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <Box
          component="div"
          sx={{ width: 100, height: 'max-content', borderRadius : '20px 0 0 20px', border: 'solid 1px black'}}
        >
          <h3>
              <div>
                {dateDay}
              </div>
              <div>
                {dateMonth}
              </div>
          </h3>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', border: 'solid 1px black', color: 'white' }}>
            <Typography variant="h6" component="div">
              {category}
            </Typography>
            <Typography  color="text.secondary" component="div">
              {title}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      
    </Card>
  );
}

NewsCard.propTypes = {};

NewsCard.defaultProps = {};

export default NewsCard;
