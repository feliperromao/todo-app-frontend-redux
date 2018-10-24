import React,{ Component } from 'react'
import { connect,  } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { changeDescription, search, add, clear } from './todoActions'

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
    const { add, search, description, clear } = this.props
    if( e.key === 'Enter' ){
      e.shiftKey ? search( description ) : add( description )
    }else if( e.key === 'Escape' ){
      clear()
    }
  }
  render(){
    const { add, search, description } = this.props
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
          <IconButton style="primary" icon="plus" onClick={ () => add( description ) } />
          <IconButton style="info" icon="search" onClick={ () => search(description) } />
          <IconButton style="default" icon="close" onClick={ this.props.clear } />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search,
  add,
  clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)