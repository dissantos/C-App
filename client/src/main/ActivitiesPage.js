import React, { Component } from "react";
import "./ActivitiesPage.css";
import Calendar from "../components/calendar/Calendar";
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
          <div className="calendar">
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
