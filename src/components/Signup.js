import React from 'react';
import '../App.css';
import {Button} from '@material-ui/core'


const Signup = (props) => {

    const {values, change, submit, errors, disabled} = props

    const onChange = (evt) => {
        const {name, value} = evt.target;
        change(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
        
    return (
        <>
            <div>Signup Page:</div>
            <form className='signup-container' >
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.userType}</div>
                </div>
                <div className='inputs'>
                    <label>Username:{' '}
                        <input 
                            value={values.username}
                            onChange={onChange}
                            name="username"
                            type="text"
                        />
                    </label>
                    <label>Email:{' '}
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            type="text"
                        />
                    </label>
                    <label>Password:{' '}
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="text"
                        />
                    </label>
                    <label>User Type:{' '}
                        <select onChange={onChange} value={values.userType} name="userType">
                            <option value="">--Select an Option--</option>
                            <option value="operator">Operator</option>
                            <option value="diner">Diner</option>
                        </select>
                    </label>
                </div>
                <Button disabled={disabled} onClick={onSubmit}>Submit</Button>
            </form>
        </>
    )
}

export default Signup;
