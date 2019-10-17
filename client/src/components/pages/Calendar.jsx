import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import { Calendar, momentLocalizer } from 'react-big-calendar'

// a localizer for { Calendar}
import { getEvents } from '../gcal'

const localizer = momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
// import 'react-big-calendar/lib/css/react-big-calendar.css'

export default class Cal extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events })
    })
  }
  render() {
    return (
      // React Components in JSX look like HTML tags
      <Calendar
        localizer={localizer}
        style={{ height: '420px', width: '80%' }}
        events={this.state.events}
      />
    )
  }
}

// render(<App />, document.getElementById('root'))
