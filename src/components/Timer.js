import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Time from './Time';
import Button from './Button';

const Timer = (props) => {
    return (
        
        <div className="card col-md-6 m-5 p-5 start-xs">
            <div className="end-xs">
                <a onClick={props.onDelete}><i className="fa fa-trash"></i></a>
            </div>
            <Title title={props.title}/>
            <Time milliseconds={props.totalSeconds}/>
            <div className="btn-group">
            {
                props.timerRunning 
                ? <Button type="pause" onButtonClick={(type) => props.buttonClicked(props.id, type)}/>
                : <Button type="start" onButtonClick={(type) => props.buttonClicked(props.id, type)}/>
            }
            <Button type="stop" onButtonClick={(type) => props.buttonClicked(props.id, type)}/>
            </div>
        </div> 
    )
}

Timer.PropTypes = {
    id: PropTypes.string,
    totalSeconds: PropTypes.number.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    timerRunning: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Timer;