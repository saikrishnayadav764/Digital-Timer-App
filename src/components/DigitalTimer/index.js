/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    timerValue: 25 * 60,
    timerStatus: 'Paused',
  }

  timerInterval = null

  Reset = () => {
    clearInterval(this.timerInterval)
    this.setState({
      isRunning: false,
      timerValue: 25 * 60,
      timerStatus: 'Paused',
    })
  }

  startTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerInterval)
      this.setState({isRunning: false, timerStatus: 'Paused'})
    } else {
      this.setState({isRunning: true, timerStatus: 'Running'})
      this.timerInterval = setInterval(() => {
        this.setState(prevState => ({
          timerValue: prevState.timerValue - 1,
        }))

        if (this.state.timerValue === 0) {
          clearInterval(this.timerInterval)
          this.setState({isRunning: false, timerStatus: 'Paused'})
        }
      }, 1000)
    }
  }

  Increment = () => {
    if (!this.state.isRunning) {
      this.setState(prevState => ({
        timerValue: prevState.timerValue + 60,
      }))
    }
  }

  Decrement = () => {
    if (!this.state.isRunning && this.state.timerValue > 60) {
      this.setState(prevState => ({
        timerValue: prevState.timerValue - 60,
      }))
    }
  }

  formatTime = () => {
    const minutes = Math.floor(this.state.timerValue / 60)
    const seconds = this.state.timerValue % 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }

  render() {
    const {isRunning, timerStatus, timerValue} = this.state
    const url = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const myAlt = isRunning ? 'pause icon' : 'play icon'

    return (
      <div className="container">
        <h1 className="header">Digital Timer</h1>
        <div className="wrapper">
          <div className="wrap1">
            <div className="imgWrap">
              <div className="timer">
                <h1>{this.formatTime()}</h1>
                <p>{timerStatus}</p>
              </div>
            </div>
          </div>
          <div className="wrap2">
            <div className="wholeWrap">
              <div className="boxWrap">
                <div className="box start">
                  <button
                    type="button"
                    onClick={this.startTimer}
                    className="startBtn"
                  >
                    <img className="im" src={url} alt={myAlt} />
                    <p>{isRunning ? 'Pause' : 'Start'}</p>
                  </button>
                </div>
                <div className="box">
                  <img
                    className="im"
                    alt="reset icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  />
                  <button
                    onClick={this.Reset}
                    type="button"
                    className="resetBtn"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="down">
                <p>Set Timer limit</p>
                <div className="indeWrap">
                  <button onClick={this.Decrement} className="btns minus">
                    -
                  </button>
                  <p className="setter">{Math.floor(timerValue / 60)}</p>
                  <button onClick={this.Increment} className="btns plus">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
