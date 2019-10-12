import React, { Component } from 'react'
import api from '../../api'

export default class Journal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      journal: [],
    }
  }
  render() {
    return (
      <div className="Journal">
        <h2>Journal Entries</h2>
        {this.state.journal.map((eachEntry, i) => (
          <div>
            <li key={i}>{eachEntry.prompt}</li>
            <li key={i}>{eachEntry.description}</li>
          </div>
        ))}
      </div>
    )
  }
  componentDidMount() {
    api
      .getMindfulness()
      .then(journal => {
        console.log(journal)
        this.setState({
          journal: journal,
        })
      })
      .catch(err => console.log(err))
  }
}
