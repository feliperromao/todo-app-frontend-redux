import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'

// Actions
import { checkDone, checkUndone, deleteTodo } from '../todo/todoActions'

import IconButton from '../template/iconButton'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  renderRows() {
    const list = this.props.list || []
    return list.map(todo => (
      <tr className={todo.done ? "checkedAsDone" : ""} key={todo._id}>
        <td>{todo.description}</td>
        <td className="tableActions">
          <IconButton style="success" icon="check" hide={ todo.done } onClick={ () => this.props.checkDone(todo) } />
          <IconButton style="warning" icon="undo" hide={ !todo.done } onClick={() => this.props.checkUndone(todo)} />
          <IconButton style="danger" icon="trash-o" onClick={() => this.props.deleteTodo(todo)} />
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  list: state.todo.list
})
const mapDispatchToProps = dispatch => bindActionCreators({
  checkDone,
  checkUndone,
  deleteTodo
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)