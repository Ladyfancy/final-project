import React, { Component } from 'react'
import api from '../../api'

import affirmations from '../../affirmations.json'
import axios from 'axios'

export default class Affirmations extends Component {
  state = {
    img: '',
    chosenAffirmations: '',
    affirmation: [],
  }

  componentDidMount() {
    //When page loads
    this.chooseAffirmation()
    this.newDog()
  }

  chooseAffirmation = () => {
    let chosenAffirmations =
      affirmations[Math.floor(Math.random() * affirmations.length)]
    this.setState({
      chosenAffirmations,
    })
  }

  newDog = () => {
    axios
      .get('https://api.thedogapi.com/v1/images/search?size=full')
      .then(result => {
        console.log(result.data[0].url)
        this.setState({
          img: result.data[0].url,
        })
      })
  }

  handleClick(e) {
    //When I click button
    e.preventDefault()
    this.chooseAffirmation()
    this.newDog()
  }

  render() {
    console.log(this.state)
    return (
      <div className="Affirmation">
        <h2>Positive Affirmation</h2>

        <div>{this.state.chosenAffirmations.affirmation}</div>

        <form>
          <img
            src={this.state.img}
            style={{
              height: '350px',
            }}
          />
          <br />
          <br />
          <button onClick={e => this.handleClick(e)}>Next</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    )
  }
}
