import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TopHeader from './TopHeader';
const MemberLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // Remove the token from local storage
    // Redirect to the login page or wherever you want
  };
  return (
    <>
      <Outlet />
      <div className="root_div">
        <div className="row">
          <div className="">
            <h3 className="brand_name text-center mt-5 mb-5">
              ACCU-CHECK <span>®</span>
            </h3>
          </div>
        </div>
        {/* Member Routes start here */}
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='padding-2'>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2964 2.8407H4.57539C3.06466 2.8407 1.82861 4.07891 1.82861 5.59229V22.1018C1.82861 23.6152 3.06466 24.8534 4.57539 24.8534H14.1891L11.4423 28.9808V30.3566H22.4295V28.9808L19.6827 24.8534H29.2964C30.8072 24.8534 32.0432 23.6152 32.0432 22.1018V5.59229C32.0432 4.07891 30.8072 2.8407 29.2964 2.8407ZM29.2964 19.3503H4.57539V5.59229H29.2964V19.3503Z" fill="black"/>
                  </svg>
                  </span>
                  <NavLink to="/user/MemberHome">
                 <button className='btn for_side_bar_prop '>OverView</button>
                 </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='padding-2'>
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32198 0.885254C1.81125 0.885254 0.575195 2.12347 0.575195 3.63685V25.6496C0.575195 27.163 1.81125 28.4012 3.32198 28.4012H22.5494C24.0602 28.4012 25.2962 27.163 25.2962 25.6496V3.63685C25.2962 2.12347 24.0602 0.885254 22.5494 0.885254H3.32198ZM3.32198 3.63684H10.1889V14.6432L6.75545 12.5795L3.32198 14.6432V3.63684Z" fill="white"/>
                  </svg>
                  </span>
                 <NavLink to='/user/MemberCourses'><button className='btn for_side_bar_prop'>Cources</button></NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='padding-2'>
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8027 16.0637H12.9357V22.9427H19.8027V16.0637ZM18.4293 0.929932V3.68152H7.44215V0.929932H4.69537V3.68152H3.32198C1.79751 3.68152 0.588929 4.91974 0.588929 6.43312L0.575195 25.6943C0.575195 27.2076 1.79751 28.4459 3.32198 28.4459H22.5494C24.0602 28.4459 25.2962 27.2076 25.2962 25.6943V6.43312C25.2962 4.91974 24.0602 3.68152 22.5494 3.68152H21.1761V0.929932H18.4293ZM22.5494 25.6943H3.32198V10.5605H22.5494V25.6943Z" fill="white"/>
                  </svg>
                  </span> 
                  <NavLink to="/user/MemberCompleteCourses"><button className='btn for_side_bar_prop'>Complete Cources</button></NavLink>                 
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='padding-2'>
                  <svg className='svg' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2961 8.47773H26.5493V20.8599H8.69522V23.6115C8.69522 24.3682 9.31325 24.9873 10.0686 24.9873H25.1759L30.6695 30.4905V9.85353C30.6695 9.09684 30.0514 8.47773 29.2961 8.47773ZM23.8025 16.7325V4.35034C23.8025 3.59366 23.1845 2.97455 22.4291 2.97455H4.57505C3.81969 2.97455 3.20166 3.59366 3.20166 4.35034V23.6115L8.69522 18.1083H22.4291C23.1845 18.1083 23.8025 17.4892 23.8025 16.7325Z" fill="white"/>
                  </svg>
                  </span>
                  <NavLink to='/user/MemberSupportCommunity'><button className='btn for_side_bar_prop'>Support & Comunity</button></NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='padding-2'>
                    <img src='/Shop2.svg' alt='' />
                  </span>
                  <NavLink to="/user/Shop">
                  <button className='btn for_side_bar_prop'>Shop</button>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
          <NavLink to="/"><button onClick={handleLogout} className="btn btn-info w-100 fw-bold">Logout</button></NavLink>
          </div>
        </div>
      </div>
      <TopHeader/>
  
       
    </>
  );
}

export default MemberLayout