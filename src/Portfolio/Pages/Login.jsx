import React from 'react';
import '../Pages/Login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
        <>
        <div className="main">

            <div className="form">
                <div className="child">
                <h1>Login</h1>
                <label htmlFor="name">username</label>
                <input type="text" name="name" id="name" className='name' placeholder='Type your name'/>
                <label htmlFor="password">Password</label>
                <input type="pass" name="pass" id="pass"  className='pass' placeholder='Type your name'/>
               <div className="forget">
               <a href="http://" >Forget password?</a>
               </div>


                <button className="btn btn-primary mt-5">Login</button>

                <div className="second-half">



                <span className='mb-2 '>OR Sign Using</span>


                <div className='logo'>
                    <span><FacebookIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><GoogleIcon/></span>
                </div>

                </div>
                    <div className="signup">
                        <span>have not account yet?</span>

                        <span className='create'> <strong> SIGNUP</strong></span>
                    </div>
                

                    </div>
            </div>
        </div>
       
        </>
    )
}

export default Login;