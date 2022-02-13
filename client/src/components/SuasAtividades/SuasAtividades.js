import React, { useState } from "react";
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
  constructor() {
    super();

    this.state = {
      nome_disciplina: "",
      nome_atividade: "",
      data: "",
    };
  }

  async componentWillMount() {
    let res = await getAtividades();
    console.log(res);
    this.setState({
      nome_disciplina: res[0].nome_disciplina,
      nome_atividade: res[0].nome_atividade,
      data: res[0].data,
    });
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
  console.log(state)
  let data = () => {
    state.data
  }

  let x = {
    title: state.nome_atividade, //this.state.nome_atividade,
    start: `2021-12-29T00:00:00`,
    end: `2021-12-29T23:59:59`,
  };
  let y = {
    title: "",
    start: "2021-12-30T00:00:00",
    end: "2021-12-30T23:59:59",
  };

  eventsList.push(x);
  eventsList.push(y);
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
