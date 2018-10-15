import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'

export default class About extends Component{
  render(){
    return(
      <div>
        <PageHeader name="Sobre" small="Nós" />
        <h2>Nossa História</h2>
        <p>Gostaria de enfatizar que o desafiador cenário globalizado deve passar por modificações independentemente do impacto na agilidade decisória.</p>
        <h2>Nossa Missão</h2>
        <p>A certificação de metodologias que nos auxiliam a lidar com o início da atividade geral de formação de atitudes acarreta um processo de reformulação e modernização das condições inegavelmente apropriadas.</p>
        <h2>Nossa Visão</h2>
        <p>Todavia, a consulta aos diversos militantes talvez venha a ressaltar a relatividade dos níveis de motivação departamental.</p>
      </div>
    )
  }
}