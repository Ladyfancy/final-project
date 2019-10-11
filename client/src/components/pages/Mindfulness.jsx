import React, { Component } from 'react'
import api from '../../api'

import prompts from '../../prompts.json'

export default class Mindfulness extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenPrompt: prompts[Math.floor(Math.random() * prompts.length)],
      prompt: [],
      description: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.prompt, this.state.description)
    let data = {
      prompt: this.state.prompt,
      description: this.state.description,
    }
    api
      .addMindfulness(data)
      .then(result => {
        console.log('SUCCESS!', result)
        this.setState({
          prompt: '',
          description: '',
          message: 'Your Entry has been saved',
        })
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    console.log(prompts)
    console.log(prompts[Math.floor(Math.random() * prompts.length)].prompt)
    console.log(this.state)

    let mainPrompt = prompts[Math.floor(Math.random() * prompts.length)].prompt

    return (
      <div className="AddCountry">
        <h2>Mindful Journaling</h2>

        <div>{this.state.chosenPrompt.prompt}</div>

        <form>
          {' '}
          <br></br>
          <div>
            <textarea
              value={this.state.description}
              name="description"
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
            />
          </div>{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Save Entry</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    )
  }
}
