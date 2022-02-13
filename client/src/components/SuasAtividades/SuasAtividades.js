import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import lang from "@fullcalendar/core/locales/pt-br";
import "./SuasAtividades.css";
import getAtividades from "../../functions/getAtividades";

const Activities = () => {
  const [state, setState] = React.useState({
    nome_disciplina: "",
    nome_atividade: "",
    data: "",  
  });

  const registroAtividade = async () => {
    
    let response = await getAtividades();
    setState({
      nome_disciplina: response[0].nome_disciplina,
      nome_atividade: response[0].nome_atividade,
      data: response[0].data,
    });
  
  };
  
}

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
          eventAdd={eventAddition()}
        />
      </>
    );
  }
}

export function eventAddition(start, end, title) {
  
  
  let x = {
    title: "teste",//this.state.nome_atividade,
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
