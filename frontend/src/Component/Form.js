import React, {useState} from 'react'
import axios from 'axios';
import "../Component/Styles/Form1.css";
import { Link } from "react-router-dom";
import {imagedata} from "./images";

const Form = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const apassword= "Admin";
    const aemail="Admin";
    const [username, setUsername] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(email==aemail || password==apassword){
            window.location.href = 'http://localhost:3000/Admin'     
        }


        if(username==username||password==password){
        //Manager Login
        try {
            // Send login request to server
            const response = await axios.post('https://tourismai-9wfg.onrender.com/managerlogin', {
              username,
              password,
            });
        
            // Check response status
            if (response.status === 200) {
              // Login successful (no token received)
              alert('Login successful!');
  
              // Handle successful login (e.g., redirect to another page)
              window.location.href = 'http://localhost:3000/manager';
              // You can use localStorage or sessionStorage for basic state management
              localStorage.setItem('isLoggedIn', true); // Example for basic state
              // ... redirect or update UI
            } else {
              // Handle unsuccessful login
              alert('Login failed. Please check your credentials and try again.');
            }
          } catch (error) {
            console.error('Error logging in user:', error);
          }
        }
      

        if(email==email || password==password){
        try {
          // Send login request to server
          const response = await axios.post('https://tourismai-9wfg.onrender.com/login', {
            email,
            password,
          });
      
          if (response.status === 200) {
            // Login successful (no token received)
            alert('Login successful!');

            window.location.href = 'http://localhost:3000/';
            localStorage.setItem('isLoggedIn', true); // Example for basic state
          } else {
            alert('Login failed. Please check your credentials and try again.');
          }
        } catch (error) {
          console.error('Error logging in user:', error);
        }
      }
      };
    return (
        <>
            <div className="back">
                
                <div className="others">    
                    <div className="photos" id='photo1'>
                        <img id='photo1' src={imagedata[6]} alt="Welcome" className='img-fluid mx-auto d-block' />
                        <div className="text-8">
                            <h3>Welcome Back</h3>
                            <p>Please log in using your personal information to stay connectd with us.</p>
                            <Link to="/registration" type="button" className='btn btn-dark border border-2 border-primary text-center' id='btn1'>Registration . . .</Link>
                        </div>
                    </div>
                    
                        <div className="content-form" id='log'>
                            <h2>LOG IN</h2>
                            <div className="form">
                                <form action="">
                                    <input type="email" value={email} 
                                    className='form-control'onChange={(e) => setEmail(e.target.value)} name="user" id="user" placeholder='E-mail'/>
                                    <br />
                                    <input type="text" value={username} 
                                    className='form-control'onChange={(e) => setUsername(e.target.value)} name="user" id="usere" placeholder='Optinal Username only Staff can use'/>
                                    <br />
                                    <input type="password" value={password} 
                                    className='form-control' onChange={(e) => setPassword(e.target.value)} name="pass" id="pass" placeholder='Password'/>
                                    <br />
                                    <div className="other-sec">
                                        <div className="form-check">
                                            <input type="checkbox" name="remember" id="remember" className='form-check-input' value='Somthing' />
                                            <label htmlFor="remember" className='form-check-label'>Remember Me</label>
                                        </div>
                                        <div className="forgot">
                                            <Link to='#' id='forgot'>Forgot password ?</Link>
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" onClick={handleSubmit} className='btn btn-dark border border-2 border-primary w-100'>Log in</button>
                                    <hr size="6" color='lightgrey' />
                                    <div className="socials">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                        <Link to="#" id='btn-3' className='w-100'>Sign in with Facebook</Link>
                                    </div>
                                    <br />
                                    <div className="social">
                                        <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="" className='img-fluid mx-auto d-block' width="35px" />
                                        <Link to="#" id='btn-2' className='w-100'>Sign in with Google</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Form;
