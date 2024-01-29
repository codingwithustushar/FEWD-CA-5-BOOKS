import React, { useState } from 'react'
import "../App.css"

function Register() {
    const initState ={
        Name:'',
        Email:'',
        Password:'',
        RepeatPassword:''

    }
    const alertState ={
        Name:'',
        Email:'',
        Password:'',
        RepeatPassword:''

    }
    const[regisState,setRegisState] = useState(initState);
    const[alert,setAlert] = useState(alertState)
  return (
    <div className='Form'>
        <h2>Create</h2>
       <form>
        <label>
            <input type='text' placeholder='Your Name' name='Name'></input>
        </label>
        <div>{alert.Name}</div>
        
        <label>
            <input type='email' placeholder='Your Email' name='Email'></input>
        </label>
        <div>{alert.Email}</div>
        <label>
            <input type='password' placeholder='Password' name='Password'></input>
        </label>
        <div>{alert.Password}</div>
        <label>
            <input type='password' placeholder='Repeat Password' name='RepeatPassword'></input>
        </label>
        <div>{alert.RepeatPassword}</div>

        <input type='submit'></input>
       </form>
    </div>
  )
}

export default Register
