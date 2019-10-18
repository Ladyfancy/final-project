import React, { Component } from 'react'
import api from '../../api'

export default class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      description: '',
      message: null
      
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
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
    }
    api
      .addCategory(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: '',
          image: '',
          description: '',
          message: `Your life category '${this.state.name}' has been created`,
        })
        setTimeout(() => {
          this.setState({
            message: null,
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddCategory">
        <h2>Add Life Category</h2>
        <form>
          Name:{' '}
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />{' '}
          <br />
         
          Image:{' '}
          <input
            type="file"
            value={this.state.image}
            name="image"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Description:{' '}
          <textarea
            value={this.state.description}
            name="description"
            cols="20"
            rows="5"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Create Life Category</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    )
  }
}
