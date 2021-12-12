import React, {Component} from 'react';
import './ActivitiesPage.css';
import Calendar from '../components/Calendar'

export default class ActivitiesPage extends Component {
    render() {
        return (
        <body>
            <div className='page'>

                <div className='calendar'>
                    <Calendar />
                </div>
            </div>
        </body>
        )
    }
}