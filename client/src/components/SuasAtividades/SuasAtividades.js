import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import lang from "@fullcalendar/core/locales/pt-br";
import "./SuasAtividades.css";

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
        <h4>Suas Atividades</h4>
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
  var x = {
    title: "",
    start: "2021-12-29T00:00:00",
    end: "2021-12-29T23:59:59",
  };
  var y = {
    title: "",
    start: "2021-12-30T00:00:00",
    end: "2021-12-30T23:59:59",
  };
  var obj = {
    title: title,
    start: start + "T00:00:00",
    end: end + "T23:59:59",
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
