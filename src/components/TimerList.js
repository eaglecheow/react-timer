import React from 'react';
import PropTypes from 'prop-types';

import Timer from './Timer';

const TimerList = (props) => {
    return (
        <div className="row center-xs">
        {
            props.timerList.map((timer) => {
            return (
                    <Timer key={timer.id} 
                    id={timer.id} 
                    totalSeconds={timer.totalSeconds} 
                    buttonClicked={(id, type) => props.buttonClicked(id, type)} 
                    title={timer.title} 
                    timerRunning={timer.timerRunning}
                    onDelete={() => props.onDelete(timer.id)}/>
                );
            })
        }
        </div>
    )
}

TimerList.propTypes = {
    timerList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        totalSeconds: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    buttonClicked: PropTypes.func.isRequired,
}

export default TimerList;