import React, { Component } from "react";
import "./ActivitiesPage.css";
import Calendar from "../components/calendar/Calendar";
import MonthCalendar from "../components/calendar/MonthCalendar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default class ActivitiesPage extends Component {
  render() {
    return (
      <body>
        <div className="header">
          <Header />
        </div>
        <div className="page">
          <div className="month-calendar">
            <MonthCalendar />
          </div>
          <div className="week-calendar">
            <Calendar />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    );
  }
}
