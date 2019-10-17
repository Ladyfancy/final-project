import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
//
import Signup from '../pages/Signup'
// import { video } from '.../slow_motion_pouring_water'

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <h1>
          <div>Vision</div> Meets Reality
        </h1>
        <p>
          The secret to achieving success is visualization combined with
          intentional action. Create your vision. Discover the true motivation
          behind your actions and what you are seeking once you acheive your
          end-goal. Studies have shown those who visual, set goals and write
          their goals down are more likely to acheive them. May this journey
          assist you in self-actualization, mindfulness, peace and achievement.
        </p>

        <br></br>
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
        <br></br>

        <Switch>
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    )
  }
}
