import React, {Component} from 'react'
import Search from './Search'
import Main from './Main'

export default class App extends Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    this.setState({searchName})
  }

  render () {
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={this.state.searchName}/>
      </div>
    )
  }
}