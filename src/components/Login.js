import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import axios from 'axios';

/*
NOTE: All state, event handlers, and api calls are handled within the LOGIN component - no props being passed down from APP
*/
const initialLoginValues = {
  username: "",
  password: "",
}

const Login = (props) => {
  const [loginValues, setLoginValues] = useState(initialLoginValues);

  //Writing onChange handler to track user inputs and send to state in real time 
  const onChange = (evt) => {
    const {name, value} = evt.target;
    setLoginValues({
      ...loginValues,
      [name]: value, 
    })
  }

  //onSubmit - prevent page reload, post login info to API
    // - Need to add some form of validation to API call - make sure passwords match to validate? 
    // - Link to relevant dashboard 
  const onSubmit = (evt) => {
    evt.preventDefault();

    const creds = {
      username: loginValues.username,
      password: loginValues.password,
    }

    axios.post("https://reqres.in/api/users", creds) 
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    setLoginValues(initialLoginValues);
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form">
        <div className="errors"></div>
        <div className="inputs">
          <label> Username:{' '}
            <input 
              value={loginValues.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <label>Password:{' '}
            <input 
              value={loginValues.password}
              onChange={onChange}
              name="password"
              type="text"
            />
          </label>
        </div>
        <Button onClick={onSubmit}>Log In</Button>
      </form>
    </div>
  )


}

export default Login;