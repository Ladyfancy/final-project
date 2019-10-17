import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'
console.log(process.env)

if (process.env.NODE_ENV === 'production') {
  axios.defaults.withCredentials = false
} else {
  axios.defaults.withCredentials = false
}
console.log(axios.defaults.withCredentials)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
