import React from 'react';
import PropTypes from 'prop-types';

const Time = (props) => {
    let totalSeconds = props.milliseconds / 1000;
  
    let hours = Math.floor(totalSeconds/3600);
    let minutes = Math.floor((totalSeconds/60) - (hours*60));
    let seconds = Math.floor(totalSeconds - (minutes*60) - (hours*3600));
    let milli = Math.floor(props.milliseconds - (seconds*1000) - (minutes*60000) - (hours*3600000));
  
    return (
      <div>
        <h3>{hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds} : {milli < 100 ? (milli < 10 ? "00" + milli : "0" + milli) : milli}</h3>
      </div>
    )
}
  
Time.propTypes = {
    milliseconds: PropTypes.number.isRequired
}

export default Time;