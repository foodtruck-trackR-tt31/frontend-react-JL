import React from 'react';
import '../App.css';
import {Button} from '@material-ui/core'


const Signup = (props) => {

    const {values, change, submit} = props

    //Flushing out event handlers 
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
                <div className='errors'></div>
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
                        <select onChange={onChange} value={values.type} name="type">
                            <option value="">--Select an Option--</option>
                            <option value="1">Operator</option>
                            <option value="2">Diner</option>
                        </select>
                    </label>
                </div>
                <Button onClick={onSubmit}>Submit</Button>
            </form>
        </>
    )
}

export default Signup;
