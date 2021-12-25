import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import lang from "@fullcalendar/core/locales/pt-br";
import './MonthCalendar.css'

const titleFormat = {
  year: "numeric",
  month: "long",
};

const headerToolbar = {
  left: "today",
  center: "title",
  right: "prev,next",
};

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[lang]}
        titleFormat={titleFormat}
        headerToolbar={headerToolbar}
        eventBackgroundColor="#003869"
      />
    );
  }
}
