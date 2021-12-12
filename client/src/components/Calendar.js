import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import lang from '@fullcalendar/core/locales/pt-br'

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
        locales={[lang]}
      />
    )
  }
}