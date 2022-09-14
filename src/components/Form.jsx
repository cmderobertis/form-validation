import React, { useReducer } from "react"

const initialState = {
  firstName: {
    value: "",
    error: "",
  },
  lastName: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
}

function reducer(state, action) {
  return {
    ...state,
    [action.field]: {
      ...state[action.field],
      value: action.payload,
    },
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    dispatch({
      type: "change text",
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const validateFirstName = (e) => {
    e.preventDefault()
    if (state.firstName.value.length < 2) {
      state.firstName.error = "Must be at least 2 characters"
    } else {
      state.firstName.error = ""
    }
  }

  return (
    <form className="form-floating">
      <div className="mb-3 form-floating">
        <input
          type="text"
          name="firstName"
          placeholder="form"
          className="form-control"
          value={state.firstName.value}
          onChange={handleChange}
          onBlur={validateFirstName}
        />
        <label htmlFor="firstName">First Name:</label>
      </div>
      {state.firstName.error && (
        <p className="text-danger">{state.firstName.error}</p>
      )}
      <div className="mb-3 form-floating">
        <input
          type="text"
          name="lastName"
          placeholder="form"
          className="form-control"
          value={state.lastName.value}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
      </div>
      {state.lastName.value.length && state.lastName.value.length < 2
        ? (state.lastName.error = "Must be at least 2 characters")
        : (state.lastName.error = "")}
      <div className="mb-3 form-floating">
        <input
          type="email"
          name="email"
          placeholder="form"
          className="form-control"
          value={state.email.value}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
      </div>
      {state.email.value.length && state.email.value.length < 5
        ? (state.email.error = "Must be at least 5 characters")
        : (state.email.error = "")}
      <p>{state}</p>
    </form>
  )
}

export default Form
