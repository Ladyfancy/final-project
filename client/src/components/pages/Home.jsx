import React, { Component } from 'react'
import Calendar from './Calendar'

// import { video } from '.../slow_motion_pouring_water'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <Calendar />
        </div>
      </div>
    )
  }
}
