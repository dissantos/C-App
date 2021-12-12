import React, {Component} from 'react';
import './ActivitiesPage.css';
import Calendar from '../components/Calendar'

export default class ActivitiesPage extends Component {
    render() {
        return (
        <div className='calendario-semanal'>
            <Calendar />
        </div>
        )
    }
}