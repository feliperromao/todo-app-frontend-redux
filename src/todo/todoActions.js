import axios from 'axios'

const URL = 'http://localhost:8080/api/todos'

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
      .then( res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }) )
  }

}


/**
 * Action com o Middleware thunk
 * para chamar outroas action apos uma promise
 */
export const add = description => {
  return dispatch => {
    axios.post(URL, {description})
      .then( res => dispatch( clear() ))
      .then( res => dispatch( search() ))
  }
}


export const checkDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then( res => dispatch({ type: 'TODO_DONE', payload: res.data }))
      .then( res => dispatch(search()))
  }
}

export const checkUndone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
      .then( () => dispatch(search()))
  }
}

export const deleteTodo = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then( () => dispatch(search()) )
  }
}

export const clear = () => {
  return [{type: 'TODO_CLEAR'}, search()]
}