import React, {Component} from 'react'
import logo from './logo.svg'
import './app.css'

export default class App extends Component {

  render () {
    return (
      <div>
        <img src={logo} alt="logo" className="logo"/>
        <p className="content">天啊受不了!</p>
      </div>
    )
  }
}