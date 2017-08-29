import React, {Component} from 'react'
import Add from '../Add/Add'
import List from '../List/List'
export default class App extends Component {

  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      comments: [
        {username: 'Tom', content: 'React So easy!'},
        {username: 'Jack', content: 'React Just So So!'}
      ]
    }
  }

  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment) // 在首位添加一个元素
    this.setState({comments})
  }

  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1) // 删除指定下标的元素
    this.setState({comments})
  }

  render () {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}></Add>
          <List comments={comments} deleteComment={this.deleteComment}></List>
        </div>
      </div>
    )
  }
}