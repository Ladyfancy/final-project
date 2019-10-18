import React, { Component } from 'react'
import api from '../../api'
// import Calendar from './Calendar'

export default class Secret extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      user: null,
      message: null,
    }
  }
  render() {
    return (
      <div className="Secret" color= " #566f7a;">
        <h2>{this.state.user}'s Profile</h2>


        <div className="result" color= " #566f7a;">{this.state.secret}</div>

        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
  componentDidMount() {
    api
      .getSecret()
      .then(data =>
        this.setState({
          secret: data.secret,
          user: data.user,
        })
      )
      .catch(err => this.setState({ message: err.toString() }))
  }
}
