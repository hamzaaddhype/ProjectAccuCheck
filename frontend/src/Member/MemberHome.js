import React from 'react'
const MemberHome = () => {
  return (
    <>
       {/* Member Prodile  */}
        {/* <div className="c" id="admin_user"> */}
        <div className='user_profile_root_crad position-absolute ps-2' style={{width:"80%",marginLeft:"20%"}}>
        <div className="container  for_common_Top_margin" >
                <div className='row ms-1 doctor_profile' >
                    <div className='doctor_image doc_parent_div d-flex'>
                        <img src='/doctor-bigImage.png' width="138.67px" height="138.67px" alt=''/>
                        <div className='doc_child ms-5'>
                          <div className='d-flex ms-1'>
                          <h6 className='doc_name'>Ahmed Ali </h6>
                          <h6 className='doc_level doc_name'>Level 1</h6>
                          </div>
                          
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar w-75"></div>
                        </div>
                        <div>
                           <p className='ms-1 doc_xp'>Xp 1280</p>
                        </div>
                        </div>
                        <div className='edit_button'>
                         <button className='btn edit_profile'> Edit Profile</button>
                       </div>
                    </div>
                    
                </div>
            {/* </div> */}
      </div>

      {/* Member Cards */}
      {/* <div className="c" id="admin_user"> */}
        <div className='container mt-5 mb-5'>
          <div className='row ms-1s'>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p className='total_points'>Total Ponits</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1 className='total_hours'>230</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p className='total_points'>Learning time</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1 className='total_hours' >23h</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p className='total_points'>Certificates</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1 className='total_hours'>2</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p className='total_points'>Completed Courses</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1 className='total_hours'>25</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Member Acheviments */}
      <div className='container'>
        <div className='row ms-1 text-center'>
          <div className="col-md-6 width me-3 for_achivements_background text-align-center for_padd">
          {/* First Row */}
            <div className='row'>
              <div className='col-md-6 p-2'>
                <h3 className='achivement'>Achivements</h3>
              </div>
              <div className='col-md-6 text-end'>
              <p className='set_date'>19 feb 2019</p>
              </div>
            </div>
          {/*First Row  */}
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-like.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Friendly</h6>
              <p className='set_para'>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/profile-reward.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Friendly</h6>
              <p className='set_para'>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-3star.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Friendly</h6>
              <p className='set_para'>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Achievement-1k-icon.svg" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Friendly</h6>
              <p className='set_para'>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
            <p>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-star.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Friendly</h6>
              <p className='set_para'>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row'>
            <p className='text-center'>Discover more assets </p>
          </div>
          </div>
          {/* Second Half Card Start Here */}
          <div className="col-md-6 width for_achivements_background">
          <div className='row p-2'>
              <div className='col-md-6 p-2'>
                <h3 className='achivement'>Completed Cources</h3>
              </div>
              <div className='col-md-6 text-end'>
              <p className='set_date'>19 feb 2019</p>
              </div>
            </div>
          {/*First Row  */}
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-like.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Cource name</h6>
              <div className='for_display progress_set_height'>
              <div className="progress progress_set_height" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar w-75 progress_set_height"></div>
              </div>
              </div>
              <p className='set_para'>Completed</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/profile-reward.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Cource name</h6>
              <div className='for_display progress_set_height'>
              <div className="progress progress_set_height" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar w-75 progress_set_height"></div>
              </div>
              </div>
              <p className='set_para'>Completed</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-3star.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Cource name</h6>
              <div className='for_display progress_set_height'>
              <div className="progress progress_set_height" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar w-75 progress_set_height"></div>
              </div>
              </div>
              <p className='set_para'>Completed</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Achievement-1k-icon.svg" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Cource name</h6>
              <div className='for_display progress_set_height'>
              <div className="progress progress_set_height" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar w-75 progress_set_height"></div>
              </div>
              </div>
              <p className='set_para'>Completed</p>
            </div>
            <div className='col-md-4 text-end'>
            <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row for_height'>
            <div className='col-md-3'>
              <span>
                <img src="/Profile-star.png" alt='' />
              </span>
            </div>
            <div className='col-md-5'>
              <h6 className='control_col'>Cource name</h6>
              <div className='for_display progress_set_height'>
              <div className="progress progress_set_height" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar w-75 progress_set_height"></div>
              </div>
              </div>
              <p className='set_para'>Completed</p>
            </div>
            <div className='col-md-4 text-end'>
               <p className='set_date'>19 feb 2019</p>
            </div>
          </div>
          <div className='row'>
            <p className='text-center'>Lern mor </p>
          </div>
          </div>        
          </div>
        </div>
        </div> 
    </>
  )
}

export default MemberHome