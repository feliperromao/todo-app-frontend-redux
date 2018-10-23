import React,{ Component } from 'react'
import { connect,  } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { changeDescription, search } from './todoActions'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandle = this.keyHandle.bind(this)
  }

  componentWillMount(){
    this.props.search()
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
          onChange={ this.props.changeDescription }
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

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)