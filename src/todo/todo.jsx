import React,{ Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
  constructor(props){
    super(props)
    this.state = { description : '', list: [] }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckDone = this.handleCheckDone.bind(this)
    this.handleCheckUndone = this.handleCheckUndone.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClean = this.handleClean.bind(this)
    this.refresh()
  }
  refresh(description = ''){
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
    .then( res => {
      this.setState( {...this.state, description, list: res.data })
    })
  }
  handleAdd(){
    const description = this.state.description
    if(description){
      axios.post(URL, {description})
      .then( res => { this.refresh() })
    }else{
      alert("Por favor adicione uma descrição para a nova tarefa")
    }
    
  }
  handleRemove(todo){
    axios.delete(`${URL}/${todo._id}`)
    .then( resp => this.refresh(this.state.description) )
  }
  handleCheckDone(todo){
    axios.put(`${URL}/${todo._id}`,{ ...todo, done: true })
    .then( res => { this.refresh(this.state.description) })
  }
  handleCheckUndone(todo){
    axios.put(`${URL}/${todo._id}`,{ ...todo, done: false })
    .then( res => { this.refresh(this.state.description) })
  }
  handleChange(event){
    this.setState({ ...this.state, description: event.target.value })
  }
  handleSearch(){
    this.refresh( this.state.description )
  }
  handleClean(){
    this.refresh()
  }

  render(){
    return(
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={ this.state.description }
          handleAdd={ this.handleAdd }
          handleChange={ this.handleChange }
          handleSearch={ this.handleSearch }
          handleClean={ this.handleClean } />
        <TodoList
          handleCheckDone={ this.handleCheckDone }
          handleCheckUndone={ this.handleCheckUndone }
          handleRemove={ this.handleRemove }
          list={ this.state.list } />
      </div>
    )
  }
}