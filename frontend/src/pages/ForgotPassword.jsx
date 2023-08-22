import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
  return (
   <>
     <div className='container-fluid forgot_page'>
     <div className='row'>
         <div className='company_name'>
         <h3 className='brand_name'>ACCU-CHECK <span>®</span> </h3>
         </div>
    </div>
    <div className='row justify-content-center'>
    <h6 className='text-center'>ACCU-CHEK ACADEMY</h6>
        <div className='col-md-6 forgoot_root'>
           <div className='forgot_box'>
                <h6 className='text-center fw-bold'>Forgot Password</h6>
                <p className='text-center'>Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                 For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
                <div className='row'>
                    <label>Email</label>
                    <input className='p-2' type='text' />
                </div>
                <div className='d-flex justify-content-center ' >
                <button className=" sign_btn btn reset p-2 mt-3">Reset</button>
                </div>
                <NavLink to="/">
                <div className='d-flex justify-content-center ' >
                <button className=" sign_btn btn reset p-2 mt-3">Home</button>
                </div>
                </NavLink>
           </div>
        </div>
    </div>
     </div>
   </>
  )
}

export default ForgotPassword