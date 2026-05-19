import React, { useState } from 'react'
import "../Component/Styles/Form1.css";
import { Link} from "react-router-dom";
import {imagedata} from "./images";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confrim, setConfirm] = useState("");
  const handleOnSubmit = async (e) => {

    if (!email || !password) {
        alert("Please fill in all required fields.");
        return;
      }

    let c= document.getElementById("matched");
    if(confrim !== password){
      c.style.display="inline";
    }
    else{
      console.log("data in console");
          e.preventDefault();
          let result = await fetch(
          'http://localhost:5000/register', {
              method: "post",
              body: JSON.stringify({ email , password}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          result = await result.json();
          console.warn(result);
          if (result) {
              alert("Data saved succesfully");
              setEmail("");
              setPassword("");
              setConfirm("");
          }
          window.location.href = 'http://localhost:3000/Form'
    }
  }
    
    return (
        <>
           <div className="back">
                
                <div className="others">    
                    <div className="photos" id='photo1'>
                        <img id='photo1' src={imagedata[6]} alt="Welcome" className='img-fluid mx-auto d-block' />
                        <div className="text-8">
                            <h3>Welcome Back</h3>
                            <p>Please log in using your personal information to stay connectd with us.</p>
                            <Link to='/Form' className='btn btn-dark border border-2 border-primary text-center' id='btn2'>Already Join . . .</Link>
                        </div>
                    </div>
                    
                        <div className="content-form" id='reg'>
                            <h2>REGISTRATION</h2>
                            <div className="form">
                                <form autoComplete='off' action=''>
                                    <input type="email" value={email} 
                                    onChange={(e) => setEmail(e.target.value)} className='form-control'  placeholder='E-mail'  />
                                    <br />
                                    <input type="password" value={password} 
                                    onChange={(e) => setPassword(e.target.value)} className='form-control' id='create' placeholder='Create Password' />
                                    <br/>
                                    <input type="password" value={confrim}
                                    onChange={(e) => setConfirm(e.target.value)} className='form-control' placeholder='Confirm Password'/>
                                    <span id='matched'>Password Does not Matched!</span>
                                    <br/><br/>
                                    <div className="other-sec">
                                        <div className="form-check">
                                            <input type="checkbox" name="remember" id="remember1" className='form-check-input' value='Somthing' />
                                            <label htmlFor="remember1" className='form-check-label'>Accept terms and Condition!</label>
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" onClick={handleOnSubmit} className='btn btn-dark border border-2 border-primary w-100' >Join</button>
                                    <hr size="6" color='lightgrey' />
                                    <div className="socials">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                        <Link to="#" id='btn-3' className='w-100'>Sign up with Facebook</Link>
                                    </div>
                                    <br />
                                    <div className="social">
                                        <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="" className='img-fluid mx-auto d-block' width="35px" />
                                        <Link to="#" id='btn-2' className='w-100'>Sign up with Google</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Registration;
