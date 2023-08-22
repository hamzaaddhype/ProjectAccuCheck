import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import video from '../../Videos/myVideo.mp4'
import Loader from '../../components/Loader'
const GetCources = () => {
// Fet All Cources from Database
const [getProducts, setProducts] = useState([]);
const [count, setCount] = useState([]);
const [isloading, setLoading] = useState(true)
useEffect(() => {
  getData();
}, []);

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

let count2 = getProducts.length;

  const [videoCompleted, setvideoCompleted] = useState(false);
  const [startTime, setStartTime] = useState(null)
  const [endTime,setEndTime] = useState(null)
  
  const handleVideoEnded = () => {
    setvideoCompleted(true);
    setEndTime(new Date());
  };

  const handleTime = ({playedSeconds}) => {
      if(startTime == null){
        setStartTime(new Date());
      }
  }


  return (
   <>
{isloading?(
      <Loader />
    ):( 
      <div className='c' id='admin_user'>
      {/* Heading */}
        <h1 className='text-center'>All Cources</h1>
        <div className='container'>
          <div className='row mb-3'>
          <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-8">
                <div class="search">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control" placeholder="Serch Vedios"/>
                  <button class="btn">Search</button>
                </div>
              </div>
              </div>
          </div>
          {/* For Vedios Count and dispaly */}
          <div className='row mb-2'>
            <div>
              <h6 className='p-3'>Vedios: {count2}</h6>
            </div>
          </div>
          {/* Display vedios asa list */}
          {getProducts.map((Cource)=>{
            return(
              <div className="row mb-3 for_row_background">
              <div className='col-md-4'>
                  <div className="vedio_ThumNail">
                    <ReactPlayer url={`http://localhost:5000/backend/uploads/${Cource.image}`} controls={true} onProgress={handleTime}   onEnded={handleVideoEnded} />
                    {console.log(`Time taken: ${endTime && startTime ? (endTime - startTime) / 1000 + " seconds" : "N/A"}`)}

                  </div>
              </div>
              {/* <div>
              <img src={Cource.image} alt='' />
              <p>{Cource.image}</p>
              </div> */}
              <div className='col-md-4'>
                <div className="cource_details">
                    <h6>{Cource.name}</h6>
                    <p>{Cource.discription}</p>
                    <p> <i className='fa fa-clock'></i> {Cource.duration}</p>
                </div>
              </div>
              <div className='col-md-4 cource_ponits'>
                <h6> <i class="fa-solid fa-award"></i> {Cource.points} </h6>
              </div>
          </div>
            )
          })}
        </div>
      </div>
      )}

     
   </>
  )
}

export default GetCources