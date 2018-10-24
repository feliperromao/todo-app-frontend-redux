import axios from 'axios'

const URL = 'http://localhost:8080/api/todos'

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

/**
 * Action com o Middleware multi
 * para retornar mais de uma action
 */
export const _add = description => {
  const request = axios.post(URL, {description})
  return [
    {type: 'TODO_ADDED', payload: request},
    search()
  ]
}

/**
 * Action com o Middleware thunk
 * para chamar outroas action apos uma promise
 */
export const add = description => {
  return dispatch => {
    axios.post(URL, {description})
      .then( res => dispatch({type: 'TODO_ADDED', payload: res.data }))
      .then( resp => dispatch( search() ) )
  }
}