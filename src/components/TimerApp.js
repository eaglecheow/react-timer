import React from 'react';

import TimerList from './TimerList';
import RandomKey from 'random-key-generator';

const data = [
    {
      id: RandomKey.getRandom(10),
      totalSeconds: 0,
      title: "Hello",
    },
    {
      id: RandomKey.getRandom(10),
      totalSeconds: 0,
      title: "Bye",
    },
    
]

class TimerApp extends React.Component {

    timerId = {};
  
    state = {
      addingTimer: false,
      timers: data,
      titleValue: '',
      previousTime: Date.now()
    }
  
    render() {
      return (
        <div>
          <h1>Timer App</h1>
          <TimerList timerList={this.state.timers} buttonClicked={this.buttonClicked} onDelete={this.deleteTimer}/>
          <div className="center-xs row">
          {
            (this.state.addingTimer)
            ? <div className="card col-md-6 m-5 p-5 start-xs">
                <h3 className="card-title m-2">Add New Timer</h3>
                <input className="form-control m-2" type="text" placeholder="Title" onChange={this.titleChanged}/>
                <div className="btn-group m-2">
                  <button className="btn btn-outline-primary" onClick={this.addTimer}><i className="fa fa-plus"></i> Create</button>
                  <button className="btn btn-outline-danger" onClick={this.toggleAddTimer}><i className="fa fa-ban"></i> Cancel</button>
                </div>
              </div>
            : <button className="btn btn-group-toggle" onClick={this.toggleAddTimer}>Add New Timer</button>
          }
          </div>
        </div>
      )
    }
  
    componentDidMount() {
      this.timerId = setInterval(() => {
        let newTimers = this.state.timers.map((timer) => {
          if (timer.timerRunning === true) {
            let interval = Date.now() - this.state.previousTime;
            return Object.assign({}, timer, {
              totalSeconds: timer.totalSeconds + interval
            });
          }
          else {
            return timer;
          }
        });
  
        this.setState({timers: newTimers, previousTime: Date.now()});
      }, 1)
    }
  
    toggleAddTimer = () => {
      let newState = Object.assign({}, this.state, {addingTimer: !this.state.addingTimer});
      this.setState(newState);
    }
  
    titleChanged = (evt) => {
      this.setState({titleValue: evt.target.value});
    }
  
    addTimer = () => {
      let newTimerList = this.state.timers.map(timer => timer);
      newTimerList.push({
        id: RandomKey.getRandom(10),
        totalSeconds: 0,
        title: this.state.titleValue
      });
      this.setState({timers: newTimerList, addingTimer: false, titleValue: ''});
    }
  
    deleteTimer = (id) => {
      let newTimerList = [];
      this.state.timers.forEach((timer) => {
        if (timer.id !== id) {
          newTimerList.push(timer);
        }
      });
  
      this.setState({timers: newTimerList});
    }
  
    buttonClicked = (id, type) => {
      let newTimers = this.state.timers.map(timer => {
        if (timer.id === id) {
          if (type === "start") {
            return Object.assign({}, timer, {timerRunning: true});
          }
          else if (type === "pause") {
            return Object.assign({}, timer, {timerRunning: false});
          }
          else {
            return Object.assign({}, timer, {
              timerRunning: false,
              totalSeconds: 0
            });
          }
        }
        else {
          return timer;
        }
      });
      this.setState({timers: newTimers});
    }
  
}

export default TimerApp;