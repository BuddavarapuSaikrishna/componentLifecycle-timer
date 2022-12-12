import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)

    console.log('constructor method')
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('compountdidmount method')
    this.timerId = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componewillUnmount methos')
    clearInterval(this.timerId)
  }

  render() {
    console.log('render method')
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
