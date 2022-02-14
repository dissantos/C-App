import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import lang from "@fullcalendar/core/locales/pt-br";
import "./Calendar.css";
import getAtividades from "../../functions/getAtividades";


const titleFormat = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
};

const headerToolbar = {
  left: "today",
  center: "title",
  right: "prev,next",
};

let eventsList = [
  {
    title: "",
    start: "2022-02-15T00:00:00",
    end: "2022-02-15T23:59:59",
  },
];

export default class Calendar extends React.Component {
  async componentDidMount() {
    const matricula = JSON.parse(window.localStorage.getItem("@C-app/login"))
      .matricula;

    let res = await getAtividades(matricula);
    let obj = [];
    res.forEach((e) => {
      const atividade = {
        nome_disciplina: e.nome_disciplina,
        nome_atividade: e.nome_atividade,
        data: e.data,
      };
      obj.push(atividade);
    });
    this.setState(obj);
  }

  render() {
    return (
      <>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridWeek"
          locales={[lang]}
          events={eventsList}
          titleFormat={titleFormat}
          headerToolbar={headerToolbar}
          eventBackgroundColor="#003869"
          dateClick={this.handleDateClick}
          eventAdd={eventAddition(this.state)}
        />
      </>
    );
  }
}

export function eventAddition(state) {
  if (state) {
    Object.values(state).forEach((e) => {
      const event = {
        title: e.nome_atividade,
        start: `${e.data}T00:00:00`,
        end: `${e.data}T23:59:59`,
      };
      eventsList.push(event);
    });
  }

  const filteredEventsList = eventsList.reduce((a, current) => {
    const x = a.find((item) => item.start === current.start);
    if (!x) {
      return a.concat([current]);
    } else {
      return a;
    }
  }, []);
  eventsList = filteredEventsList;
}
