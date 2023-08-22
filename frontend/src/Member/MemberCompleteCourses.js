import React from 'react';
import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
const MemberCompleteCourses = () => {
    const [getTrueCources,setTrueCources] = useState([]);
    const [getFalseStaus_cources, setFalseStausCources] = useState([]);
    const getTrueStausCources = async () => {
        let result = await fetch("http://localhost:5000/User/getTrueStausCources");
        result = await result.json();
        console.log(result)
        console.log("hamzano stratus found")
        if(result<0){
          result.send("<h1>No Data!</h1>")
        }
        console.log("Result from API Members list", result);
        setTrueCources(result);
        console.log(result._id);
        // setLoading(false)
      };
      const getFalseStausCources = async () => {
        let result = await fetch("http://localhost:5000/User/getFalseStausCources");
        result = await result.json();
        console.log(result)
        console.log("hamzano stratus found")
        if(result<0){
          result.send("<h1>No Data!</h1>")
        }
        console.log("Result from API Members list", result);
        setFalseStausCources(result);
        console.log(result._id);
      };
      useEffect(() => {
        getTrueStausCources();
        getFalseStausCources();
      }, []);
  return (
    <>
         {/* <div className="c" id="admin_user"> */}
         <div className='position-absolute' style={{marginLeft:'20%',width:"80%", marginTop:"07%"}}>
            {/* First Container */}
            <div className="container border mt-5 rounded bg-light">
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Completed Courses</h3>
                    </div>
                    <div className='col-sm-3 justify-content-end'>
                        <input className='justify-content-end mt-4 ms-5' type='Date' placeholder='Date'></input>
                    </div>
                </div>


                <div className='row mt-4 ms-2'>
                    <div className='col-2 text-primary' >
                        <p>Medical(4)</p>
                    </div>
                    <div className='col font-weight-normal'>
                        <p>Products(2)</p>
                    </div>
                    <div className='row'><hr></hr></div>
                </div>

                {getTrueCources.map((trueCources)=>{
                    return(
                        <div className='row ms-0 mb-5'>
                    <div className='col-sm-2' id="set_height_width">
                        {/* <img src='/medical-doctor.png' className='rounded'></img> */}
                    <ReactPlayer
                    url={`http://localhost:5000/backend/uploads/${trueCources.image}`}
                    controls={true}
                    // className="set_height_width"
                    
                    />
                    </div>
                    <div className='col mt-2'>
                        <div className='row fw-normal'>
                        <p>{trueCources.name}</p>
                        </div>
                        <div className='row fw-light fs-6'>
                        <p>{trueCources.discription}.</p>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-sm-3'><i class="fa-regular fa-clock">  &nbsp; {trueCources.duration}</i></div>
                            <div className='col p-0 ' style={{display:"flex",justifyContent:"right",height:"09%" }}> <img src='/Award-star.png'></img></div>
                            <div className='col-sm-3 p-0 mt-1 me-5'><p>{trueCources.points}</p></div>
                        </div>   
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <button className=' btn btn-dark  ms-5 text-warning'>Completed</button>
                    </div>
                </div>
                    )
                })}
                
                <br></br>
            </div>
            <br/>

            
             {/* Second Container */}
             <div className='container border mt-5 rounded bg-light'>
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Recommended Courses</h3>
                    </div>
                    <div className='col-sm-3 mt-3'>
                        <a href='' className=' ms-5 text-dark'>See all <i className='fa fa-greater-than'></i> </a>
                    </div>
                </div>
                <br/>

                <div className='row ms-0'>
                {getFalseStaus_cources.map((falseStaus)=>{
                    return(
                        <div  className='col-md-2 col-sm-2 border bg-white rounded p-0 m-2' style={{ width:"23%"}}>
                        <div className='row auto_height'>
                            {/* <img height="80%" src='/Recommended-Course-1.png' className='rounded' width="100%"></img> */}
                            <ReactPlayer
                                // ref={playerRef}
                                url={`http://localhost:5000/backend/uploads/${falseStaus.image}`}
                                controls={true}
                                // onProgress={handleTime}
                                // onEnded={handleVideoEnded}
                                // onProgress={handleTime}
                                // onEnded={handleVideoEnded}
                />
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> {falseStaus.name}</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; {falseStaus.duration}</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>{falseStaus.points}</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div class="col-md-12" style={{display:"flex",justifyContent:"right"}}>
                                <button width="60%" type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
                  

                    

                    

                    {/* <div className='col-md-2 col-sm-2 ms-2   border bg-white rounded p-0' style={{width:"23%"}}>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-4.png' className='rounded' width="100%"></img>
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> Course Name goes here with details</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; 30 min</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>300</span>
                            </div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <div class="col-md-12"  style={{display:"flex",justifyContent:"right"}}>
                                <button type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default MemberCompleteCourses;