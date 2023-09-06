import React from 'react';
import '../signUp_Pages/Signup.css';

const Signup = () => {
  return (
        <>
        <div className="signMain">
          
                <div className="signUp_form">
                    <h3>Signup</h3>

                  
                        <form action="#" className="signUp_fields">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" name="name" id="name" required/>

                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="lname" id="lname" required/>

                            <label htmlFor="email">Email</label>
                            <input type="email" name="mail" id="mail" required/>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required/>

                          

                            <button className="btn btn-primary btn_signup">Signup</button>

                     

                            
                        </form>

                        <div className="checkbx">
                        <input type="checkbox" name="checkbox" id="checkbox" defaultChecked/>
                            <label htmlFor="checkbox"  >I have accept Terms and Privacy Policy</label>    
                        </div>

                        <div className="extra">
                        
                        <a href='/' className="signup_account" target='_blank'>already have an account?</a>
                        <span>CopyRight @ Your Copy Right</span>
                        </div>
                </div>
        </div>
        </>
    )
}

export default Signup;