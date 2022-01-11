import React, { Component } from "react";
import "./ActivitiesPage.css";
import Calendar from "../Calendar/Calendar";
import MonthCalendar from "../Calendar/MonthCalendar";

function ActivitiesPage() {
  return (
    <div className="page">
      <div className="month-calendar">
        <MonthCalendar />
        <span className="events">
          <p className="event-title">Sistemas Distribuidos</p>
          <p className="event-content">Novo vídeo cadastrado - dd/mm/aa</p>
          <p className="event-title">Web</p>
          <p className="event-content">Nova tarefa cadastrada - dd/mm/aa</p>
          <p className="event-title">Inteligência Computacional</p>
          <p className="event-content">Novo questionario  - dd/mm/aa</p>
        </span>
      </div>
      <div className="week-calendar">
        <p className="week-title">Atividades da Semana</p>
        <Calendar />
      </div>
    </div>
  );
}

export default ActivitiesPage;
