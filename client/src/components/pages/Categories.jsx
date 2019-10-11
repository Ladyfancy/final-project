import React, { Component } from 'react'
import api from '../../api'

export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
  }
  render() {
    return (
      <div className="Categories">
        <h2>Vison Board</h2>
        {this.state.categories.map((eachCategory, i) => (
          <li key={i}>
            <div>{eachCategory.name}</div>
            <br></br>
            <div>{eachCategory.image}</div>
            <br></br>
            <div>{eachCategory.description}</div>
            <br></br>
          </li>
        ))}
        
      </div>
    )
  }
  componentDidMount() {
    api
      .getCategories()
      .then(categories => {
        console.log(categories)
        this.setState({
          categories: categories,
        })
      })
      .catch(err => console.log(err))
  }
}
