import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
      <button className={props.type === "stop" ? "btn btn-outline-danger" : "btn btn-outline-primary"} 
        onClick={() => props.onButtonClick(props.type)}>
        {
          props.type === "start" 
          ? <div>
              <i className="fa fa-play"/> Start 
            </div>
          : (props.type === "stop" 
            ? <div>
                <i className="fa fa-stop"/> Stop
              </div>
            : <div>
                <i className="fa fa-pause"/> Pause
              </div>)
        }
      </button>
    );
}
  
Button.propTypes = {
    type: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
}

export default Button;
