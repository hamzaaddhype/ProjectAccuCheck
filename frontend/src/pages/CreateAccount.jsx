import React from 'react'
import { useState,useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const CreateAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setSelectedCountry] = useState("usa");
  const [langguage, setSelectedLanguage] = useState("English");
  const [confrim_password, setconfrim_password] = useState("");
  const savebtnhandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password, country, langguage, confrim_password);
    let result = await fetch("http://localhost:5000/User/userRegister", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        country,
        langguage,
        confrim_password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (
      !name ||
      !email ||
      !password ||
      !country ||
      !langguage ||
      !confrim_password
    ) {
      console.log("Register Sucessfully");
      Swal.fire({
        position:"top-end",
        icon: "error",
        title: "Oops...",
        text: "Please enter your all required fields",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      Swal.fire("Good job!", "Register Sucessfully!", "success");
      navigate("/");
    }
    result = await result.json();

    console.log("RESULT after Fecth", result);
  };
  return (
  <>
  <div className='container-fluid' >
    <div className='row'>
        <div className='col-md-6 right_half_section'>
           <div className='row'>
                <div className='company_name'>
                  <h3 className='brand_name'>ACCU-CHECK <span>®</span> </h3>
                </div>
           </div>
           <div className='row'>
                <span className='empty-height'></span>
           </div>
           <div className='row'>
                <div className='company_title for_center'>
                    <h3 className='fw-bold'>Your Virtual Trainer</h3>
                </div> 
           </div>
           <div className='row mt-5'>
                  <div className='company_details for_center'>
                      <p>Accu-Chek Academy is your online 
                       source for training, learning and answering questions about Accu-Chek devices. There are three different modes 
                       availableComprehensive explanations and helpful tips are provided to explain a wide variety of Accu-Chek devices 
                       so that you can easily use and understand them. </p>
                </div>
            </div>
        </div>
        {/* Left Half Form Section */}
        <div className='col-md-6 left__sec_CreateAccount' >
            <div className='row left_padding'>
               <div className='logo'>
                    <img src='./roche_logo1.png' width={'120px'} alt='Roche'/>
               </div>
               <div className='row'>
                    <h3 className='d-flex fw-bold mb-2'>Create your Account</h3>
               </div>
               <div className='row'>
                <div className='form_body'>
                <form>
                    <div className="mb-3">
                        <label for="name" className="d-flex ms-3 mb-1">Name</label>
                        <input onChange={(e) => setName(e.target.value)} name='name' type="string" className="form-control inputs_background" id="user_name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="d-flex ms-3 mb-1">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="form-control inputs_background" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className='row'>
                         <div className='row'>
                             <div className='col-md-6'>
                                 <div className="dropdown">
                                    <select className="form-select inputs_background" aria-label="Default select example">
                                            <option selected>Select your country</option>
                                            <option value="1">USA</option>
                                            <option value="2">Canada</option>
                                            <option value="3">United Kindom</option>
                                     </select>
                                 </div>
                             </div>
                             <div className='col-md-6'>
                                 <div className="dropdown">
                                     <select className="form-select inputs_background">
                                            <option selected>Select your language</option>
                                            <option value="1">English</option>
                                            <option value="2">Spanish</option>
                                            <option value="3">Germen</option>
                                      </select>
                                </div>
                                </div>
                             </div>
                         </div>
                           <br/>
                      <div className="mb-3">
                         <label for="exampleInputPassword1" className="d-flex ms-3 form-label">Password</label>
                         <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control inputs_background" id="exampleInputPassword1"/>
                    </div>       
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="d-flex ms-3 form-label">Confrim Password</label>
                        <input onChange={(e) => setconfrim_password(e.target.value)} name='confrim_password' type="password" className="form-control inputs_background" id="exampleInputPassword1"/>
                    </div>
                   
                       <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label d-flex" for="exampleCheck1">I have to read Terms and Conditions</label>
                      </div>
                     
                       <br/>
                       <div className=''>
                         <button  onClick={savebtnhandler}
                        type="submit"
                        value="Submit" className='btn sign-btn_1 sign_btn '>Sign Up</button>
                       </div>
                       <div className='text-center mt-1'>
                         <p>Or</p>
                       </div>
                       <div className=''>
                         <button className='btn sign-btn_2 sign_btn '>Sign up with google</button>
                       </div>
                       <NavLink to="/">
                       <div className='text-center mt-3'>
                         <p className='about_account'>Already have an account! <span className='for_color'> Sign in</span></p>
                       </div>
                       </NavLink>
                    </form>
                </div>
               </div>
            </div>
        </div>
    </div>
  </div>

  </>
  )
}

export default CreateAccount