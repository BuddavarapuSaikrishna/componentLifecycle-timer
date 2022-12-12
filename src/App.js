import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  OnToggleClock = () => {
    this.setState(prevState => ({
      showClock: !prevState.showClock,
    }))
  }

  render() {
    const {showClock} = this.state

    const ShowHide = showClock ? 'Hide' : 'show'

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.OnToggleClock}
        >
          {ShowHide}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
