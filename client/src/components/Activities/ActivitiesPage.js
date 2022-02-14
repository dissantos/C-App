import React, { useState, useEffect } from "react";
import "./ActivitiesPage.css";
import Calendar from "../Calendar/Calendar";
import MonthCalendar from "../Calendar/MonthCalendar";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import getAtividades from "../../functions/getAtividades";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ActivitiesPage = () => {
  const [state, setState] = useState([]);
  const matricula = JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
    .matricula;

  useEffect(() => {
    const fetchNews = async () => {
      let response = await getAtividades(matricula);
      let obj = [];
      response.forEach((e) => {
        const atividade = {
          nome_disciplina: e.nome_disciplina,
          nome_atividade: e.nome_atividade,
          data: e.data,
        };
        obj.push(atividade);
      });
      setState(obj);
    };
    fetchNews();
  }, []);

  return (
    <div className="page">
      <div className="month-calendar">
        <MonthCalendar />
        <div className="events">
          {state.map((atividade, id) => {
            console.log("Atividade: ", atividade);
            return (
              <>
                <p className="event-title">{atividade.nome_disciplina}</p>
                <p className="event-content">
                  {atividade.nome_atividade} - {dateFormat(atividade.data)}
                </p>
              </>
            );
          })}
        </div>
      </div>
      <div className="week-calendar">
        <p className="week-title">Atividades da Semana</p>
        <Calendar />
      </div>
    </div>
  );
};

const dateFormat = (date) => {
  let datePart = date.match(/\d+/g);
  let year = datePart[0].substring(2);
  let month = datePart[1];
  let day = datePart[2];

  return day + "/" + month + "/" + year;
};

export default ActivitiesPage;
