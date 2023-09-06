import React from 'react';
import { useState } from 'react';

const Form_validations = () => {

    const [input, getInput]= useState("");
    const [pass, getPass]= useState("");


    function loginHandle(e)
    {
        e.preventDefault();
    }
    function userValue(e){
        let val=e.target.value;
        getInput(val);
        console.log('wrong')
    }
    function userPassword(e){
        let val=e.target.value;
        getPass(val);
    }    

    
  return (
        <>
        <form  onSubmit={loginHandle}>
            <h1>form validation</h1>
            <h3>{input}</h3>
            <br />
            <label htmlFor="name">Name:</label>

            <input type="text" name="name" id="name"  onChange={userValue} placeholder='Enter UserName'/>
            <br />
            <br />
            <h3>{pass}</h3>
            <label htmlFor="name">Password:</label>
            <input type="text" name="Password" id="Password"  onChange={userPassword} placeholder='Enter Password'/>
    <br />
    <br />
            <button className="btn btn-primary" >submit</button>
            </form>

        </>
    )
}

export default Form_validations;

