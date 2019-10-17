import React, { Component } from 'react'
import api from '../../api'

import affirmations from '../../affirmations.json'
import dogs from '../../dogs.json'

import axios from 'axios'

export default class Affirmations extends Component {
  state = {
    img: '',
    chosenAffirmations: '',
    affirmation: [],
    dog: [],
    chosenDog: '',
  }

  componentDidMount() {
    //When page loads
    this.chooseAffirmation()
    this.chooseDog()
  }

  chooseAffirmation = () => {
    let chosenAffirmations =
      affirmations[Math.floor(Math.random() * affirmations.length)]
    this.setState({
      chosenAffirmations,
    })
  }

  chooseDog = () => {
    let chosenDog = dogs[Math.floor(Math.random() * dogs.length)]
    this.setState({
      chosenDog,
    })
  }

  // newDog = () => {
  //   axios.get(process.env.DOG).then(result => {
  //     console.log(result.data[0].url)
  //     this.setState({
  //       img: result.data[0].url,
  //     })
  //   })
  // }

  handleClick(e) {
    //When I click button
    e.preventDefault()
    this.chooseAffirmation()
    this.chooseDog()
  }

  render() {
    console.log(process.env.DOG)
    console.log(this.state)
    return (
      <div className="Affirmation">
        <h2>Positive Affirmation</h2>

        <div>{this.state.chosenAffirmations.affirmation}</div>
        <img src={this.state.chosenDog.image} style={{ height: '300px' }} />

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
