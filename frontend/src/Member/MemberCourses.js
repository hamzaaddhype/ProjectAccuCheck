import React, { useRef } from 'react';
import  { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2';
const MemberCourses = () => {
const [getProducts, setProducts] = useState([]);
const [getFalseStaus_cources, setFalseStausCources] = useState([]);
const [isloading, setLoading] = useState(true);
const [startTime, setStartTime] = useState(null);
const [isVideoPaused, setVideoPaused] = useState(true);
const [endTime, setEndTIme] = useState(null);
const [timeWatched, setTimeWatched] = useState(0);
const [videoCompleted, setVideoCompleted] = useState(false);
const playerRef = useRef(null);
const [progress, setProgress] = useState(0);
useEffect(() => {
    console.log('timeWatched:', timeWatched);
    console.log('videoDuration:', getProducts[0]?.duration);
    const videoDuration = getProducts[0]?.duration;
    const progress = videoDuration > 0 ? (timeWatched / videoDuration) * 100 : 0;
    console.log('progress:', progress);
    setProgress(progress);
}, [timeWatched, getProducts]);


const handleTime = ({ playedSeconds }) => {
    if (!startTime) {
        setStartTime(playedSeconds);
    }

    if (!videoCompleted) {
        setEndTIme(playedSeconds);
        const newTimeWatched = playedSeconds - startTime;
        setTimeWatched(newTimeWatched);

        const videoDurationInSeconds = convertToSeconds(getProducts[0]?.duration);
        const calculatedProgress = (newTimeWatched / videoDurationInSeconds) * 100;
        const progressPercentage = Math.min(calculatedProgress, 100);
        setProgress(progressPercentage);
    }
};

const handleVideoEnded = () => {
    setVideoCompleted(true);
    setStartTime(null);
    setEndTIme(null);
    setTimeWatched(getProducts[0]?.duration); // Set timeWatched to the video duration
    setProgress(100); // Set progress to 100%
    alert('Video ended');
};

    const getData = async () => {
        let result = await fetch("http://localhost:5000/Admin/getCources");
        result = await result.json();
        if(result<0){
          result.send("<h1>No Data!</h1>")
        }
        console.log("Result from API Members list", result);
        setProducts(result);
        console.log(result._id);
        setLoading(false)
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
        setLoading(false)
      };
      useEffect(() => {
        getData();
        getFalseStausCources();
      }, []);
    //   function convertToSeconds(timeString) {
    //     const regex = /(\d+)\s*(HRS|min)/g;
    //     const matches = [...timeString.matchAll(regex)];
      
    //     let totalSeconds = 0;
      
    //     matches.forEach((match) => {
    //       const value = parseInt(match[1]);
    //       const unit = match[2];
      
    //       if (unit === 'HRS') {
    //         totalSeconds += value * 3600; // Convert hours to seconds
    //       } else if (unit === 'min') {
    //         totalSeconds += value * 60; // Convert minutes to seconds
    //       }
    //     });
    //     totalSeconds=totalSeconds / 60 ;
    //     return totalSeconds;
    //   }
    function convertToSeconds(timeString) {
        const regex = /(\d+)\s*(HRS|min)/g;
        const matches = [...timeString.matchAll(regex)];
      
        let totalSeconds = 0;
      
        matches.forEach((match) => {
          const value = parseInt(match[1]);
          const unit = match[2];
      
          if (unit === 'HRS') {
            totalSeconds += value * 3600; // Convert hours to seconds
          } else if (unit === 'min') {
            totalSeconds += value * 60; // Convert minutes to seconds
          }
        });
      
        return totalSeconds;
      }
  return (
    <>
         {/* <div className="c" id="admin_user"> */}
         <div className='position-absolute' style={{marginLeft:'20%',width:"80%", marginTop:"07%"}}>
            {/* First Container */}
            <div className="container border mt-5 rounded bg-light">
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Courses</h3>
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
                {getProducts.map((product) => {
                    const videoDurationInSeconds = convertToSeconds(product.duration);

                    const progress = videoDurationInSeconds > 0 ? (timeWatched / videoDurationInSeconds) * 100 : 0;

                    console.log('playedSeconds:', timeWatched);
                    console.log('videoDuration:', videoDurationInSeconds);
                    console.log('progress:', progress);
                        

return (
            <div className='row ms-0' key={product._id}>
            <div className='col-md-3 video_Thumbnail' style={{ height: '10%' }}>
                {/* Video Player */}
                <ReactPlayer
                    ref={playerRef}
                    url={`http://localhost:5000/backend/uploads/${product.image}`}
                    controls={true}
                    // onProgress={handleTime}
                    // onEnded={handleVideoEnded}
                    onProgress={handleTime}
                    onEnded={handleVideoEnded}
                />
                <p>Time Watched: {(endTime - startTime).toFixed(2)} seconds</p>
            </div>
            <div className='col mt-2'>
                {/* ... (product details) */}
            </div>
            <div className='col-md-3 mt-3'>
                <button className='btn btn-primary ms-5 text-light'>Continue</button>
                <div key={product._id}>
                <p>Progress</p>
                {/* Progress Bar */}
                <div className='progress'>
                    <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin='0'
                        aria-valuemax='100'
                    >
                        {videoCompleted ? '100.00% Complete' : `${progress.toFixed(2)}% Complete`}
                    </div>
                </div>
            </div>
        </div>
            </div>
    
    );
})}




                  
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

export default MemberCourses;