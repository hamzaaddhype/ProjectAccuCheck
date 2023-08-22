// import React from 'react'
// import Swal from "sweetalert2";
// import Joi from "joi-browser";
// import { useState,useEffect } from 'react';
// import { json,useParams } from 'react-router-dom';

// const UpdateMember = () => {
//   const params = useParams();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setSelectedCountry] = useState("usa");
//   const [langguage, setSelectedLanguage] = useState("English");
//   const [confrim_password, setConfrimPassword] = useState("");
//   useEffect(() => {
//     getUserData();
//     updatingData();
//   }, []);
//   const getUserData = async () => {
//     console.log(params);
//     let result = await fetch(
//       `http://localhost:5000/User/getSingleMember/${params.id}`
//     );
//     result = await result.json();
//     setName(result.name);
//     setEmail(result.email);
//     setPassword(result.password);
//     setSelectedCountry(result.country);
//     setSelectedLanguage(result.langguage);
//     setConfrimPassword(result.confrim_password);
//     console.log(result.name);
//   };
//   const [user, setUser] = useState({
//     name: setName,
//     email: setEmail,
//     password: setPassword,
//     country: setSelectedCountry,
//     langguage: setSelectedLanguage,
//     confrim_password: setConfrimPassword,
//   });
//   const updatingData = async (e) => {
//     e.preventDefault();
//     let result = await fetch(
//       `http://localhost:5000/User/updateSingleMember/${params.id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           country,
//           langguage,
//           confrim_password
//         }),
//         headers: {
//           "Content-Type": "Application/json",
//         },
//       }
//     );
//     result = await result.json();
//     if (result) {
//     //  alert("Success")
//     console.log("Updated Success");
//     }
//   };
//   const [errors, setErrors] = useState({});

//   const schema = {
//     name: Joi.string().min(3).max(50).required(),
//     email: Joi.string().email().min(10).max(100).required(),
//     password: Joi.string().min(8).max(100).required(),
//     country: Joi.string().min(3).max(100).required(),
//     langguage: Joi.string().min(3).max(100).required(),
//     confrim_password: Joi.string().min(8).max(100).required(),
//   };
//   const validateProperty = (name, value) => {
//     const obj = { [name]: value };
//     const subSchema = { [name]: schema[name] };
//     const result = Joi.validate(obj, subSchema);
//     const { error } = result;
//     return error ? error.details[0].message : null;
//   };
//   const handleSave = (event) => {
//     const { name, value } = event.target;
//     let errorData = { ...errors };
//     const errorMessage = validateProperty(name, value);
//     if (errorMessage) {
//       errorData[name] = errorMessage;
//     } else {
//       delete errorData[name];
//     }
//     setErrors(errorData);
//   };
//   const savebtnhandler = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/User/userRegister", {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const hasErrors = Object.keys(errors).length > 0;
//     if (hasErrors) {
//       Swal.fire({
//         position: "top-end",
//         icon: "error",
//         title: "Oops...",
//         text: "Please enter all required fields correctly",
//         footer: '<a href="">Why do I have this issue?</a>',
//       });
//     } else {
//       Swal.fire("Good job!", "User added successfully!", "success");
//     }
//     result = await result.json();
//   };
//   const CHangeFunction = (event) => {
//     const { name, value } = event.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   return (
//    <>

// <div className="c" id="admin_user">
//         <div className="row">
//           <div className="col-md-6" id="div_center">
//             <div className="row left_padding">
//               <div className="row text-center mt-3">
//                 <h3 className="d-flex fw-bold mb-2 justify-content-center">
//                   Update Member
//                 </h3>
//               </div>
//               <div className="row">
//                 <div className="form_body">
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="name" className="d-flex ms-3 mb-1">
//                         Name
//                       </label>
//                       <input
//                         // onChange={CHangeFunction}
//                         onChange={(e) => setName(e.target.value)}
//                         value={name}
//                         onBlur={handleSave}
//                         name="name"
//                         type="text"
//                         className="form-control inputs_background"
//                         id="user_name"
//                         // value={user.name}
//                       />
//                       {errors.name && (
//                         <div className="alert alert-danger">{errors.name}</div>
//                       )}
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleInputEmail1"
//                         className="d-flex ms-3 mb-1"
//                       >
//                         Email address
//                       </label>
//                       <input
//                         // onChange={CHangeFunction}
//                         onChange={(e) => setEmail(e.target.value)}
//                         onBlur={handleSave}
//                         name="email"
//                         type="email"
//                         className="form-control inputs_background"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                         // value={user.email}
//                         value={email}
//                       />
//                       {errors.email && (
//                         <div className="alert alert-danger">{errors.email}</div>
//                       )}
//                     </div>
//                     <div className="row">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="dropdown">
//                             <select
//                               className="form-select inputs_background"
//                               aria-label="Default select example"
//                               // onChange={CHangeFunction}
//                               onChange={(e) => setSelectedCountry(e.target.value)}
//                               onBlur={handleSave}
//                               name="country"
//                               // value={user.country}
//                               value={country}
//                             >
//                               <option value="usa">USA</option>
//                               <option value="canada">Canada</option>
//                               <option value="uk">United Kingdom</option>
//                             </select>
//                             {errors.country && (
//                               <div className="alert alert-danger">
//                                 {errors.country}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="dropdown">
//                             <select
//                               className="form-select inputs_background"
//                               // onChange={CHangeFunction}
//                               onChange={(e) => setSelectedLanguage(e.target.value)}
//                               onBlur={handleSave}
//                               name="langguage"
//                               // value={user.langguage}
//                               value={langguage}
//                             >
//                               <option value="english">English</option>
//                               <option value="spanish">Spanish</option>
//                               <option value="german">German</option>
//                             </select>
//                             {errors.langguage && (
//                               <div className="alert alert-danger">
//                                 {errors.langguage}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <br />
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleInputPassword1"
//                         className="d-flex ms-3 form-label"
//                       >
//                         Password
//                       </label>
//                       <input
//                         // onChange={CHangeFunction}
//                         onChange={(e) => setPassword(e.target.value)}
//                         onBlur={handleSave}
//                         name="password"
//                         type="password"
//                         className="form-control inputs_background"
//                         id="exampleInputPassword1"
//                         // value={user.password}
//                         value={password}
//                       />
//                       {errors.password && (
//                         <div className="alert alert-danger">{errors.password}</div>
//                       )}
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="exampleInputPassword1"
//                         className="d-flex ms-3 form-label"
//                       >
//                         Confirm Password
//                       </label>
//                       <input
//                         // onChange={CHangeFunction}
//                         onChange={(e) => setName(e.target.value)}
//                         onBlur={handleSave}
//                         name="confrim_password"
//                         type="password"
//                         className="form-control inputs_background"
//                         id="exampleInputPassword1"
//                         // value={user.confrim_password}
//                         value={confrim_password}
//                       />
//                       {errors.confrim_password && (
//                         <div className="alert alert-danger">
//                           {errors.confrim_password}
//                         </div>
//                       )}
//                     </div>
//                     <br />
//                     <div className="">
//                       <button
//                         className="btn sign-btn_1 sign_btn"
//                         // onClick={savebtnhandler,updatingData}
//                         onClick={updatingData}
//                         type="submit"
//                       >
//                         Update Member
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//    </>
//   )
// }

// export default UpdateMember



import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import Joi from "joi-browser";
import { useParams } from 'react-router-dom';

const UpdateMember = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setSelectedCountry] = useState("usa");
  const [langguage, setSelectedLanguage] = useState("English");
  const [confrim_password, setConfrimPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let result = await fetch(
      `http://localhost:5000/User/getSingleMember/${params.id}`
    );
    result = await result.json();
    setName(result.name);
    setEmail(result.email);
    setPassword(result.password);
    setSelectedCountry(result.country);
    setSelectedLanguage(result.langguage);
    setConfrimPassword(result.confrim_password);
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(name, value);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    setErrors(errorData);
  };

  const validateProperty = (name, value) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const updatingData = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    for (const field in user) {
      const error = validateProperty(field, user[field]);
      if (error) {
        validationErrors[field] = error;
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        let result = await fetch(
          `http://localhost:5000/User/updateSingleMember/${params.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              name,
              email,
              password,
              country,
              langguage,
              confrim_password
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        result = await result.json();
        if (result) {
          console.log("Updated Success");
          Swal.fire("Success", "Member updated successfully!", "success");
        }
      } catch (error) {
        console.error("Error updating member", error);
        Swal.fire("Error", "Failed to update member", "error");
      }
    }
  };

  const user = {
    name,
    email,
    password,
    country,
    langguage,
    confrim_password,
  };

  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(10).max(100).required(),
    password: Joi.string().min(8).max(100).required(),
    country: Joi.string().min(3).max(100).required(),
    langguage: Joi.string().min(3).max(100).required(),
    confrim_password: Joi.string().min(8).max(100).required(),
  };

  return (
    <div className="c" id="admin_user">
      <div className="row">
        <div className="col-md-6" id="div_center">
          <div className="row left_padding">
            <div className="row text-center mt-3">
              <h3 className="d-flex fw-bold mb-2 justify-content-center">
                Update Member
              </h3>
            </div>
            <div className="row">
              <div className="form_body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="d-flex ms-3 mb-1">
                      Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      onBlur={handleSave}
                      name="name"
                      type="text"
                      className="form-control inputs_background"
                      id="user_name"
                    />
                    {errors.name && (
                      <div className="alert alert-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                       <label
                        htmlFor="exampleInputEmail1"
                        className="d-flex ms-3 mb-1"
                      >
                        Email address
                      </label>
                      <input
//                         // onChange={CHangeFunction}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleSave}
                        name="email"
                        type="email"
                        className="form-control inputs_background"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
//                         // value={user.email}
                        value={email}
                      />
                      {errors.email && (
                        <div className="alert alert-danger">{errors.email}</div>
                      )}
                    </div>
                    <div className="row">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="dropdown">
                            <select
                              className="form-select inputs_background"
                              aria-label="Default select example"
//                               // onChange={CHangeFunction}
                              onChange={(e) => setSelectedCountry(e.target.value)}
                              onBlur={handleSave}
                              name="country"
                               value={user.country}
                              //value={country}
                            >
                              <option value="usa">USA</option>
                              <option value="canada">Canada</option>
                              <option value="uk">United Kingdom</option>
                            </select>
                            {errors.country && (
                              <div className="alert alert-danger">
                                {errors.country}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dropdown">
                            <select
                              className="form-select inputs_background"
                              // onChange={CHangeFunction}
                              onChange={(e) => setSelectedLanguage(e.target.value)}
                              onBlur={handleSave}
                              name="langguage"
                               value={user.langguage}
                              //value={langguage}
                            >
                              <option value="english">English</option>
                              <option value="spanish">Spanish</option>
                              <option value="german">German</option>
                            </select>
                            {errors.langguage && (
                              <div className="alert alert-danger">
                                {errors.langguage}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Password
                      </label>
                      <input
                         // onChange={CHangeFunction}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handleSave}
                        name="password"
                        type="password"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                          value={user.password}
                        //value={password}
                      />
                      {errors.password && (
                        <div className="alert alert-danger">{errors.password}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                         // onChange={CHangeFunction}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleSave}
                        name="confrim_password"
                        type="password"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                          value={user.confrim_password}
                        //value={confrim_password}
                      />
                      {errors.confrim_password && (
                        <div className="alert alert-danger">
                          {errors.confrim_password}
                        </div>
                      )}
                    </div>
                    <br />
                    
                   <div className="">
                    <button
                      className="btn sign-btn_1 sign_btn"
                      onClick={updatingData}
                      type="submit"
                    >
                      Update Member
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMember;
