import React from 'react';
const MemberSupportCommunity = () => {
  return (
    <>
         {/* <div className="c" id="admin_user"> */}
        <div className='position-absolute' style={{marginLeft:'20%',width:"80%", marginTop:"07%"}}>
            {/* First Container  support & Community*/}
            <div className="container border mt-5 rounded support_community" style={{width:"95%"}}>
                <div className='row'>
                    <div className='col-md-6 mt-2'>
                        <h3 className='ms-2 fw-bold'>Support & Community</h3>
                    </div>
                    <div className='col-md-6 mt-2'  style={{display:"flex",justifyContent:"right"}}>
                        <input  className='me-2' type='text' placeholder=' ' style={{height:"75%",width:"50%"}}/>
                        <input  className='me-4' type='date' placeholder='Date' style={{height:"75%"}}/>
                    </div>
                </div>

                <div className='row mt-4 ms-1'>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-md-1 ms-2 text-primary'><i className='fa fa-home'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Getting Started</p></div>
                            <div className='col-md-3 ms-4 text-primary' style={{display:'flex',justifyContent:'right'}}><a href='/user/MemberCourses'><i className='fa fa-greater-than'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-user-circle'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Account</p></div>
                            <div className='col-md-3 ms-4' style={{display:'flex',justifyContent:'right'}}><a href=''><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-wallet'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Billing</p></div>
                            <div className='col-md-3 ms-4' style={{display:'flex',justifyContent:'right'}}><a href=''><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-message'></i></div>
                            <div className='col-md-2 fs-6' style={{fontSize:"88%", width:"60%"}}><p>Frequently Asked Questions   </p></div>
                            <div className='col-md-3 ms-1' ><a href=''><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-gear'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Settings</p></div>
                            <div className='col-md-3 ms-4' style={{display:'flex',justifyContent:'right'}}><a href=''><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-bell'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Status</p></div>
                            <div className='col-md-3 ms-4' style={{display:'flex',justifyContent:'right'}}><a href='/user/MemberCompleteCourses'><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-md-1 ms-2'><i className='fa fa-credit-card'></i></div>
                            <div className='col-md-3' style={{width:"40%"}}><p>Changelog</p></div>
                            <div className='col-md-3 ms-4' style={{display:'flex',justifyContent:'right'}}><a href=''><i className='fa fa-greater-than text-dark'></i></a></div>
                        </div>

                    </div>

                    <div className='col-md-6'>
                        <div className='row border rounded support_community_row ms-3' style={{width:'125%'}}>
                            <div className='col-lg'>
                                <p className='mt-2 fw-bold'>Category Title</p>
                                <p>Category description belongs here. Feel free to add long or evene short description.
                                    All is up to you and your needs for this component.
                                </p>
                            </div>
                            <div className='col-md-3'>
                                <img src='/line.svg' className=' ms-4' style={{height:"50%"}}></img>
                                <a href=''><i className='fa fa-greater-than' style={{marginLeft:"30%",marginTop:"45%"}}></i></a>
                            </div>
                        </div>
                        <br/>

                        <div className='row border rounded support_community_row  ms-3' style={{width:'125%'}}>
                            <div className='col-lg'>
                                <p className='mt-2 fw-bold'>Category Title</p>
                                <p>Category description belongs here. Feel free to add long or evene short description.
                                    All is up to you and your needs for this component.
                                </p>
                            </div>
                            <div className='col-md-3'>
                                <img src='/line.svg' className='mt-0 ms-4' style={{height:"50%"}}></img>
                                <a href=''><i className='fa fa-greater-than' style={{marginLeft:"30%",marginTop:"45%"}}></i></a>
                            </div>
                        </div>
                        <br/>

                        <div className='row border rounded support_community_row  ms-3' style={{width:'125%'}}>
                            <div className='col-lg'>
                                <p className='mt-2 fw-bold'>Category Title</p>
                                <p>Category description belongs here. Feel free to add long or evene short description.
                                    All is up to you and your needs for this component.
                                </p>
                            </div>
                            <div className='col-md-3'>
                                <img src='/line.svg' className='mt-0 ms-4' style={{height:"50%"}}></img>
                                <a href=''><i className='fa fa-greater-than' style={{marginLeft:"30%",marginTop:"45%"}}></i></a>
                            </div>
                        </div>
                        <br/>

                    </div>

                </div>
            </div>

            {/* Second Container Contact Us*/}
            <div className='container support_community_row' style={{display:'flex'}}>
                <div className='col border mt-2 rounded bg-light m-3 p-0' style={{ width:"45%"}}>
                    <h3 className='text-center fw-bold mt-5'>Contact Us</h3>
                    <br/>
                    <form>
                    <label className='fw-bold  ms-5'>Name</label><br/>
                    <input className='ms-5 w-75 fw-light' type='text' placeholder='Input Your Name Here' style={{textAlign:'left',textIndent:'10%'}}>
                        </input><br/>
                        <label className='fw-bold  ms-5 mt-3'>Email</label><br/>
                        <input className='ms-5 w-75 fw-light' type='email' placeholder='Input Your Email Here' style={{textAlign:'left',textIndent:'10%'}}>
                        </input><br/>
                        <label className='fw-bold  ms-5 mt-3'>Message</label><br/>
                        <textarea rows={5} className='ms-5  rounded fw-light' placeholder='Write your message here' style={{textAlign:'left',textIndent:'10%',height:"90%",width:"75%"}}></textarea>
                        <button className='btn sign-btn_1 sign_btn rounded-pill ms-5 w-75'>Send</button>
                    </form>

                </div>
                <div className='col border mt-2 rounded bg-light p-0 ms-3 support_community_row' style={{height:'60%',width:'30%'}}>
                    <h5 className=' ms-3 company_logo_color' style={{marginTop:'15%'}}>Where to Start</h5><br></br>
                    <a href='/user/MemberHome'><p className='ms-3 company_logo_color  text-decoration-underline'>Getting Started</p></a>
                    <a href='hamza'><p className='ms-3  text-decoration-underline company_logo_color'>Account</p></a>
                    <a href='/user/Shop'><p className='ms-3 text-decoration-underline company_logo_color'>Shop</p></a>
                    <a href='hamza'><p className='ms-3 text-decoration-underline company_logo_color'>Frequently Asked Questions</p></a>
                    <a href='hamza'><p className='ms-3 text-decoration-underline company_logo_color'>Features</p></a>
                    <a href='/user/MemberCompleteCourses'><p className='ms-3 text-decoration-underline company_logo_color'>Status</p></a>
                    <a href='/user/Shop'><p className='ms-3 text-decoration-underline company_logo_color'>Changelog</p></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default MemberSupportCommunity;