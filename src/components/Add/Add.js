/**
 * 添加评论组件
 */
import React, {Component, PropTypes} from 'react'
export default class Add extends Component {

  static propTypes = {// 给Add添加属性
    addComment: PropTypes.func.isRequired
  }

  /*constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }*/
  state = { // 给Add的实例对象添加state属性
    content: ''
  }

  submit = () => {
    // 得到输入的数据
    const username = this.refs.username.value.trim()
    const content = this.state.content.trim()

    // 检查
    if(!username || !content) {
      return
    }

    // 包装成comment对象
    const comment = {username, content}
    // 添加到comments中显示
    this.props.addComment(comment)

    // 清除输入
    this.refs.username.value = ''
    this.setState({content: ''})
  }

  handleChange = (event) => {
    // 得到最新输入的值
    const content = event.target.value
    // 更新状态
    this.setState({content})
  }

  render () {
    const {content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
                      onChange={this.handleChange} value={content}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
