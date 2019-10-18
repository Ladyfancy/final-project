import React, { Component } from 'react'
import api from '../../api'
import axios from 'axios'
import configServer from '../../configServer'

export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
  }

  deleteCategory = i => {
    let allCategories = [...this.state.categories]
    let id = allCategories.splice(i, 1)[0]._id
    console.log(id)
    // console.log(allCategories.splice(i, 1)[0]._id)
    // allCategories.splice(id, 1)
    this.setState({
      categories: allCategories,
    })
    console.log(this.state.categories)

    axios
      .delete(`${configServer}/categories/delete/${id}`)
      .then(response => {
        console.log(response, ' was deleted')
      })
      .catch(err => {
        console.log(err)
      })
  }

  checkCategory = id => {
    api.testCategories(id)
  }

  render() {
    console.log(this.state.categories)
    return (
      <div className="Categories">
        <h2>Vison Board</h2>
        {this.state.categories.map((eachCategory, i) => (
          <li key={i}>
            <div>{eachCategory.name}</div>
            <br></br>
            <img src={eachCategory.image} />
            <br></br>
            <div>{eachCategory.description}</div>
            <br></br>
            {/* <button>Edit</button> */}
            <button onClick={this.deleteCategory}>Delete</button>
          
          </li>



        ))} <div>



        </div>
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
