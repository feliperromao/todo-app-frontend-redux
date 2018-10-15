import React, { Component } from 'react'

import IconButton from '../template/iconButton'
import If from '../template/if'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  renderRows() {
    const list = this.props.list || []
    return list.map(todo => (
      <tr className={todo.done ? "checkedAsDone" : ""} key={todo._id}>
        <td>{todo.description}</td>
        <td className="tableActions">
          <IconButton style="success" icon="check" hide={ todo.done } onClick={() => this.props.handleCheckDone(todo)} />
          <IconButton style="warning" icon="undo" hide={ !todo.done } onClick={() => this.props.handleCheckUndone(todo)} />
          <IconButton style="danger" icon="trash-o" onClick={() => this.props.handleRemove(todo)} />
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