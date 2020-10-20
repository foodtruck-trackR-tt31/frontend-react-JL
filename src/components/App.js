import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import Signup from './Signup';
import Nav from './Nav';
import Login from './Login';
import api from '../resources/testAPI';


const initSignupValues = {
  username: "",
  email: "",
  password: "",
  type: "",
}

const initialUsers = []



function App() {

  const [signupValues, setSignupValues] = useState(initSignupValues);
  const [users, setUsers] = useState(initialUsers);

  //EVENT HANDLERS 

  const trackChange = (name, value) => {
    //This would be the place to validate some inputs 
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
    }

    setUsers([newUser, ...users]);
    setSignupValues(initSignupValues);
    //Post to API Here as well - once we get fetch working. 
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/register">
            <Signup values={signupValues} change={trackChange} submit={formSubmit}/>
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