import React, { Component } from 'react'
import api from '../../api'

import affirmations from '../../affirmations.json'

export default class Affirmations extends Component {
  state = {
    chosenAffirmations: '',
    affirmation: [],
  }

  componentDidMount() {
    //When page loads
    this.chooseAffirmation()
  }

  chooseAffirmation = () => {
    let chosenAffirmations =
      affirmations[Math.floor(Math.random() * affirmations.length)]
    this.setState({
      chosenAffirmations,
    })
  }

  handleClick(e) {
    //When I click button
    e.preventDefault()
    this.chooseAffirmation()
  }

  render() {
    return (
      <div className="Affirmation">
        <h2>Positive Affirmation</h2>

        <div>{this.state.chosenAffirmations.affirmation} ???</div>

        <form>
          {' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Next</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    )
  }
}
