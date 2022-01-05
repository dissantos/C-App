import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import DadosAcademicos from "../DadosAcademicos/DadosAcademicos";
import SuasAtividades from "../SuasAtividades/SuasAtividades";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Home extends React.Component {
  render() {
    return (
      <>
        <Box fluid sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>NOTICIAS</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <SuasAtividades></SuasAtividades>
              </Item>
            </Grid>
            <Grid  item xs={4}>
              <Item>
                <DadosAcademicos></DadosAcademicos>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
