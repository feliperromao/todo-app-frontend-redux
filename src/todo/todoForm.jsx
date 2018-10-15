import React,{ Component } from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandle = this.keyHandle.bind(this)
  }
  keyHandle(e){
    if( e.key === 'Enter' ){
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    }else if( e.key === 'Escape' ){
      this.props.handleClean()
    }
  }
  render(){
    return(
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
          value={ this.props.description }
          onChange={ (value) => this.props.handleChange(value) }
          onKeyUp={ this.keyHandle }
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"></input>
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={ this.props.handleAdd } />
          <IconButton style="info" icon="search" onClick={ this.props.handleSearch } />
          <IconButton style="default" icon="close" onClick={ this.props.handleClean } />
        </Grid>
      </div>
    )
  }
}