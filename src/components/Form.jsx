import React, { useReducer } from 'react'

const initialState = {
  firstName: {
    value: '',
    error: ''
  },
  lastName: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  }
}

function reducer(state, action) {
  return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.payload
        }
      }
}

const Form = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    dispatch({
      type: 'change text',
      field: e.target.name,
      payload: e.target.value
    })
  }

  return (
    <form className='col'>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name='firstName' value={state.firstName.value} onChange={handleChange} />
      {
        state.firstName.value.length && state.firstName.value.length < 2
        ? state.firstName.error = 'Must be at least 2 characters'
        : state.firstName.error = ''
      }
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name='lastName' value={state.lastName.value} onChange={handleChange}/>
      {
        state.lastName.value.length && state.lastName.value.length < 2
        ? state.lastName.error = 'Must be at least 2 characters'
        : state.lastName.error = ''
      }
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' value={state.email.value} onChange={handleChange} />
      {
        state.email.value.length && state.email.value.length < 5
        ? state.email.error = 'Must be at least 5 characters'
        : state.email.error = ''
      }
    </form>
  )
}

export default Form