import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import lang from "@fullcalendar/core/locales/pt-br";
import './Calendar.css'

const titleFormat = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const headerToolbar = {
  left: "today",
  center: "title",
  right: "prev,next",
};

const events = {
  title: "event 1",
  start: "2021-12-13T01:00:00",
  end: "2021-12-13T02:00:00",
};

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        locales={[lang]}
        events={events}
        titleFormat={titleFormat}
        headerToolbar={headerToolbar}
        eventBackgroundColor="#003869"
      />
    );
  }
}
