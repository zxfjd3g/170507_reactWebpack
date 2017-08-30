import React, {Component,PropTypes} from 'react'
import axios from 'axios'
export default class Main extends Component {

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  state = {
    firstView: true,
    loading: false,
    users: null,
    errorMsg: null
  }

  componentWillReceiveProps(nextProps) {
    const searchName = nextProps.searchName
    console.log('componentWillReceiveProps() '+searchName)
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })
    // 使用axios发送ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        const result = response.data
        const users = result.items.map(item => {
          return {
            user_url: item.html_url,
            avatar_url: item.avatar_url,
            username: item.login
          }
        })
        // 更新状态(请求成功了)
        this.setState({
          loading: false,
          users
        })
      })
      .catch (error => {
        // 更新状态(请求失败了)
        this.setState({
          loading: false,
          errorMsg: '请求失败!'
        })
      })
  }

  render () {

    const {firstView, loading, users, errorMsg} = this.state
    if(firstView) {
      return <h2>Enter name to search: {this.props.searchName}</h2>
    } else if(loading) {
      return <h2>LOADING...</h2>
    } else if(errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div key={index} className="card">
                <a href={user.user_url} target="_blank">
                  <img src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.username}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }
}