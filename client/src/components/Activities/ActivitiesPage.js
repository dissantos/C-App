import React, { useState, useEffect } from "react";
import "./ActivitiesPage.css";
import Calendar from "../Calendar/Calendar";
import MonthCalendar from "../Calendar/MonthCalendar";
import getAtividades from "../../functions/getAtividades";

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
      console.log(obj)
    };
    fetchNews();
  }, []);

  return (
    <div className="page">
      <div className="month-calendar">
        <MonthCalendar />
        <span className="events">
          {addEvent(state)}
          <p className="event-title">Sistemas Distribuidos</p>
          <p className="event-content">Novo vídeo cadastrado - dd/mm/aa</p>
          <p className="event-title">Web</p>
          <p className="event-content">Nova tarefa cadastrada - dd/mm/aa</p>
          <p className="event-title">Inteligência Computacional</p>
          <p className="event-content">Novo questionario - dd/mm/aa</p>
        </span>
      </div>
      <div className="week-calendar">
        <p className="week-title">Atividades da Semana</p>
        <Calendar />
      </div>
    </div>
  );
};

function insertTaskOnPage(event) {
  let calendarEl = document.querySelector("month-calendar");
  let eventEl = document.querySelector("events");
  let nome_disciplina = document.querySelector("event-content");
  let nome_atividade = document.querySelector("event-title");

  eventEl.classList.add("event-title");
  nome_disciplina.innerHTML = `${event.nome_disciplina}`;

  eventEl.classList.add("event-content");
  nome_atividade.innerHTML = `${event.nome_atividade}`;

  eventEl.appendChild(nome_disciplina, nome_atividade);
  calendarEl.appendChild(eventEl);
}

function addEvent(state) {
  console.log(state)
}

export default ActivitiesPage;
