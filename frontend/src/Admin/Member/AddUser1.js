import React, { useState } from "react";
import Joi from "joi-browser";
import Swal from "sweetalert2";

const SideBar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setSelectedCountry] = useState("usa");
  const [langguage, setSelectedLanguage] = useState("English");
  const [confrim_password, setConfrimPassword] = useState("");
  const [user, setUser] = useState({
    name: setName,
    email: setEmail,
    password: setPassword,
    country: setSelectedCountry,
    langguage: setSelectedLanguage,
    confrim_password: setConfrimPassword,
  });
  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(10).max(100).required(),
    password: Joi.string().min(8).max(100).required(),
    country: Joi.string().min(1).max(100).required(),
    langguage: Joi.string().min(1).max(100).required(),
    confrim_password: Joi.string().min(8).max(100).required(),
  };

  const validateProperty = (name, value) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
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
 
  const savebtnhandler = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/User/userRegister", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(result.status=== 201){
      Swal.fire("success!", "User add Sucessfuly!", "success");
    
    // navigate('/user')
    window.alert("Successfull")
  }else{
    Swal.fire({
      position:"center",
      icon: "error",
      title: "Oops...",
      text: "User added Failed",
    });
  } 
    result = await result.json();
    } catch (error) {
      console.log(error);
    }
    
  };

  const CHangeFunction = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className="c" id="admin_user">
        <div className="row">
          <div className="col-md-6" id="div_center">
            <div className="row left_padding">
              <div className="row text-center mt-3">
                <h3 className="d-flex fw-bold mb-2 justify-content-center">
                  Add User
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
                        onChange={CHangeFunction}
                        onBlur={handleSave}
                        name="name"
                        type="text"
                        className="form-control inputs_background"
                        id="user_name"
                        value={user.name}
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
                        onChange={CHangeFunction}
                        onBlur={handleSave}
                        name="email"
                        type="email"
                        className="form-control inputs_background"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={user.email}
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
                              onChange={CHangeFunction}
                              onBlur={handleSave}
                              name="country"
                              value={user.country}
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
                              onChange={CHangeFunction}
                              onBlur={handleSave}
                              name="langguage"
                              value={user.langguage}
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
                        onChange={CHangeFunction}
                        onBlur={handleSave}
                        name="password"
                        type="password"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                        value={user.password}
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
                        onChange={CHangeFunction}
                        onBlur={handleSave}
                        name="confrim_password"
                        type="password"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                        value={user.confrim_password}
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
                        onClick={savebtnhandler}
                        type="submit"
                      >
                        Create User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;


