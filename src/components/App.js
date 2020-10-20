import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import Signup from './Signup';
import Nav from './Nav';
import Login from './Login';
import api from '../resources/testAPI';

import schema from '../validation/formSchema';
import * as yup from 'yup';

import axios from 'axios';


///// SET INITIAL VALUES FOR STATE 

const initSignupValues = {
  username: "",
  email: "",
  password: "",
  userType: "",
}

const initSignupErrors = {
  username: "",
  email: "",
  password: "",
  userType: "",
}
  
const initialUsers = []
const initDisabled = true;



function App() {

  const [signupValues, setSignupValues] = useState(initSignupValues);
  const [users, setUsers] = useState(initialUsers);
  const [signupErrors, setSignupErrors] = useState(initSignupErrors);
  const [disabled, setDisabled] = useState(initDisabled);

  //Helper Function

  const postUser = (user) => {
    axios.post(api.register.url, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //EVENT HANDLERS - Passed down to Signup

  const trackChange = (name, value) => {
    //This would be the place to validate some inputs 
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setSignupErrors({
          ...signupErrors, [name]: "",
        })
      })
      .catch((err) => {
        setSignupErrors({
          ...signupErrors,
          [name]: err.errors[0]
        })
      })
    setSignupValues({
      ...signupValues, 
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: signupValues.username,
      email: signupValues.email,
      password: signupValues.password,
      type: signupValues.type,
    };
    
    postUser(newUser);
    setSignupValues(initSignupValues);
    //Post to API Here as well - once we get fetch working. 

  }

  useEffect(() => {
    schema.isValid(signupValues).then(valid => {
      setDisabled(!valid)
    })
  }, [signupValues]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/register">
            <Signup 
              values={signupValues} 
              change={trackChange} 
              submit={formSubmit} 
              errors={signupErrors} 
              disabled={disabled}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
