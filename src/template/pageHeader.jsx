import React,{ Component } from 'react'

export default class PageHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <header className="page-header">
        <h2>{ this.props.name } <small>{ this.props.small }</small></h2>
      </header>
    )
  }
}