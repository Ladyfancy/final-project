import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import AddCategory from './pages/AddCategory'
import Affirmations from './pages/Affirmations'
import Mindfulness from './pages/Mindfulness'

import Categories from './pages/Categories'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import logo from '../ihlogo.png'
import video from '../Water Drop-H264 75.mov'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div>
        {/* <div className="Topline">
          <img src={logo} alt="logo" />
        </div> */}

        <div className="App">
          <header className="App-header">
            <h1>
              <img src={logo} /> Mindfulness App
          
            </h1>

            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/categories">Vision Board</NavLink>
            <NavLink to="/affirmations">Affirmations</NavLink>
            <NavLink to="/mindfulness">Mindfulness</NavLink>

            {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
            {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
            {api.isLoggedIn() && (
              <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                Logout
              </Link>
            )}
            {/* <NavLink to="/secret">Secret</NavLink> */}
          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countries" component={Countries} />
            <Route path="/categories" component={Categories} />
            <Route path="/add-category" component={AddCategory} />
            <Route path="/affirmations" component={Affirmations} />
            <Route path="/add-country" component={AddCountry} />
            <Route path="/mindfulness" component={Mindfulness} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/secret" component={Secret} />
            <Route render={() => <h2>404 Sorry Try Another Page</h2>} />
          </Switch>
        </div>
        <div className="parent-element-to-video">
          <video src={video} autoPlay loop alt="video" />
        </div>
        {/* <div>
  <Card>
    <Card.Img variant="top" src="ihlogo.png" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="ihlogo.png" />
  </Card>
</div> */}
      </div>
    )
  }
}
