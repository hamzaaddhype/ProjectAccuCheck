import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal  from 'sweetalert2';

const ForgotPassword = () => {
const [passwordType, setPasswordType] = useState('password');
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const savebtnhandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    
    let result = await fetch("http://localhost:5000/Admin/adminSigin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await result.json(); 
  
    if (result.status === 400 || !data) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Invalid Cranditionals",
      });
    } else {
      Swal.fire("Welcome!", "Login Successfully!", "success");
      const token = data.token; 
  
      // Store the token in local storage
      localStorage.setItem('jwtToken', token);
  
      // Redirect to the protected admin dashboard 
      navigate('/Admin/Dashboard');
      window.alert("Successful");
    } 
  };
  
    const togglePasswordVisibility = () => {
        setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
    }

    return (
        <>
            <div className='container-fluid forgot_page'>
                <div className='row'>
                    <div className='company_name'>
                        <h3 className='brand_name'>ACCU-CHECK <span>®</span> </h3>
                    </div>
                </div>
                <br /><br />
                <div className='row row-md-6 justify-content-center'>
                    <h3 className='text-center'>ACCU-CHEK ACADEMY <span>®</span></h3>
                    <div className='col col-md-6  forgoot_root'>
                        <div className='forgot_box'>
                            <h3 className='text-center text-decoration-underline'>Admin Login</h3>
                            <br/>
                            <div className='row'>
                                <label>Admin Email</label>
                                <input onChange={(e)=>setEmail(e.target.value)} className='p-2' type='email'  placeholder='Input Your Email Here' style={{ textAlign: "left", textIndent: '03%' }} />
                            </div>
                            <br></br>
                            <div className='row'>
                                <label>Admin Password</label>
                                
                                    <input type={passwordType} id='password' onChange={(e)=>setPassword(e.target.value)} className='p-2' placeholder='Input Your Password Here' style={{ textAlign: "left", textIndent: '03%', width:"100%" }} />
                                    <i className={`fa ${passwordType === 'password' ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" onClick={togglePasswordVisibility} style={{position:'absolute',marginLeft:'21%',marginTop:'03%',zIndex:"1",width:'30%'}}></i>
                            </div>
                            <br/>
                            <div className='d-flex justify-content-center ' >
                                <button className="sign_btn btn reset p-2 mt-3" onClick={savebtnhandler}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;
