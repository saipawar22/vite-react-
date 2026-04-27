import React, { useReducer } from 'react';

// Define the initial state for the form
const initialData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: ""
};

// The reducer function handles state updates based on the action type
const reducer = (state, action) => {
  // Returns a new object with existing state plus the updated field
  return {
    ...state,
    [action.type]: action.val
  };
};
function login() {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useReducer Hook Tutorial</h1>

      {/* Form Inputs */}
      <input 
        type="text" 
        placeholder="Enter Name" 
        onChange={(e) => dispatch({ type: 'name', val: e.target.value })} 
      /><br /><br />
      
      <input 
        type="password" 
        placeholder="Enter Password" 
        onChange={(e) => dispatch({ type: 'password', val: e.target.value })} 
      /><br /><br />

      <input 
        type="text" 
        placeholder="Enter Email" 
        onChange={(e) => dispatch({ type: 'email', val: e.target.value })} 
      /><br /><br />

      <input 
        type="text" 
        placeholder="Enter City" 
        onChange={(e) => dispatch({ type: 'city', val: e.target.value })} 
      /><br /><br />

      <input 
        type="text" 
        placeholder="Enter Address" 
        onChange={(e) => dispatch({ type: 'address', val: e.target.value })} 
      /><br /><br />

      <button onClick={() => console.log(state)}>Submit Data</button>

      <hr />

      {/* Displaying State Data */}
      <ul>
        <li><strong>Name:</strong> {state.name}</li>
        <li><strong>Password:</strong> {state.password}</li>
        <li><strong>Email:</strong> {state.email}</li>
        <li><strong>City:</strong> {state.city}</li>
        <li><strong>Address:</strong> {state.address}</li>
      </ul>
    </div>
  );
}

export default login;