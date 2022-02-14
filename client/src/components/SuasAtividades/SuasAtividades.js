import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import lang from "@fullcalendar/core/locales/pt-br";
import "./SuasAtividades.css";
import getAtividades from "../../functions/getAtividades";

const titleFormat = {
  month: "long",
};

const headerToolbar = {
  left: "today",
  center: "title",
  right: "prev,next",
};

let eventsList = [
  {
    title: "",
    start: "2021-12-28T00:00:00",
    end: "2021-12-28T23:59:59",
  },
];

class SuasAtividades extends React.Component {
  async componentDidMount() {
    const matricula = JSON.parse(window.localStorage.getItem("@C-app/login"))[0]
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
        <h4 className="atividades">Suas Atividades</h4>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locales={[lang]}
          titleFormat={titleFormat}
          headerToolbar={headerToolbar}
          eventBackgroundColor="#003869"
          dateClick={this.handleDateClick}
          events={eventsList}
          contentHeight="300px"
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

    console.log(eventsList);
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

SuasAtividades.propTypes = {};

SuasAtividades.defaultProps = {};

export default SuasAtividades;
