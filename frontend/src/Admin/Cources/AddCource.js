import React, { useState } from "react";
import Joi from 'joi-browser';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
let AddCource = () => {
  let [name, setName] = useState("");
  let [id, setId] = useState("");
  let [discription, setDescription] = useState("");
  let [points, setPoints] = useState("");
  let [status, setStatus] = useState("");
  let [duration, setDuration] = useState("");
  let [image, setImage] = useState(null);
  let [url, setUrl] = useState("");
  let [errors, setErrors] = useState({});
  const [addedSuccessfully, setAddedSuccessfully] = useState(false);
  const navigate = useNavigate();


  let schema = {
        name: Joi.string().min(3).max(100).required(),
        id: Joi.number().integer().min(1).required(),
        discription: Joi.string().min(10).required(),
        points: Joi.number().integer().min(1).required(),
        status: Joi.string().min(3).required(),
        duration: Joi.string().min(3).required(),
        url: Joi.string().min(3).required(),
        image: Joi.string().min(200).required(),
      };

      let validateProperty = (name, value) => {
            let obj = { [name]: value };
            let subSchema = { [name]: schema[name] };
            let result = Joi.validate(obj, subSchema);
            let { error } = result;
            return error ? error.details[0].message : null;
          };

          let handleBlur = (event) => {
                let { name, value } = event.target;
                let errorMessage = validateProperty(name, value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: errorMessage,
                }));
              };
  let handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("id", id);
    formData.append("discription", discription);
    formData.append("points", points);
    formData.append("status", status);
    formData.append("duration", duration);
    formData.append("image", image);
    formData.append("url", url);

    try {
      console.log("IN If Condointment")
      // send a POST request to the server to add the product
      let response = await axios.post("http://localhost:5000/Admin/addCources", formData);
      console.log(response.data); 
      if(response.status=== 201){
        Swal.fire("success!", "Cource add Sucessfuly!", "success");
        setAddedSuccessfully(true);
        resetFormData();
      
      navigate('/Admin/GetCources')
      window.alert("Successfull")
    }else{
      Swal.fire({
        position:"center",
        icon: "error",
        title: "Oops...",
        text: "Cource added Failed",
      });
    } 

    } catch (error) {
      console.log(error);
    }    
        formData = { name, id, discription, points, status, duration, url, image };
        const validationErrors = {};
        let isValid = true;
        for (let field in schema) {
                let errorMessage = validateProperty(field, formData[field]);
                if (errorMessage) {
                  validationErrors[field] = errorMessage;
                  isValid = false;
                }
        }
           setErrors(validationErrors);      
   
  };
  const resetFormData = () => {
    setName("");
    setId("");
    setDescription("");
    setPoints("");
    setStatus("");
    setDuration("");
    setImage("");
    setUrl("");
    setErrors({});
  };
  return (
    <> 
      <div className="c" id="admin_user">
        {/* Navigation Buttons */}
        <div className="row">{/* Your navigation buttons here */}</div>
  
        {/* Form Section */}
        <div className="row">
          {/* Left Half Form Section */}
          <div className="col-md-6" id="div_center">
            <div className="row left_padding">
              <div className="row text-center mt-3">
                <h3 className="d-flex fw-bold mb-2 justify-content-center">
                  Add Course
                </h3>
              </div>
              <div className="row">
                <div className="form_body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                  <div className="mb-3 col-md-6">
                      <label htmlFor="name" className="d-flex ms-3 mb-1">
                        Title
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleBlur}
                        name="name"
                        value={name}
                        type="text"
                        className="form-control inputs_background"
                        id="user_name"
                      />
                      {errors.name && (
                        <div className="alert alert-danger">{errors.name}</div>
                      )}
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="id" className="d-flex ms-3 mb-1">
                        SKU Number
                      </label>
                      <input
                        onChange={(e) => setId(e.target.value)}
                        onBlur={handleBlur}
                        name="id"
                        value={id}
                        type="number"
                        className="form-control inputs_background"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      {errors.id && (
                        <div className="alert alert-danger">{errors.id}</div>
                      )}
                    </div>
                  </div>
                   
                    {/* Other input fields */}
                    {/* ... */}
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Description
                      </label>
                      <input
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={handleBlur}
                        value={discription}
                        name="discription"
                        type="text"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.discription && (
                        <div className="alert alert-danger">{errors.discription}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Points
                      </label>
                      <input
                        onChange={(e) => setPoints(e.target.value)}
                        onBlur={handleBlur}
                        name="points"
                        value={points}
                        type="number"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.points && (
                        <div className="alert alert-danger">{errors.points}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Status
                      </label>
                      <input
                        onChange={(e) => setStatus(e.target.value)}
                        onBlur={handleBlur}
                        name="status"
                        value={status}
                        type="text"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.status && (
                        <div className="alert alert-danger">{errors.status}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        Duration
                      </label>
                      <input
                        onChange={(e) => setDuration(e.target.value)}
                        onBlur={handleBlur}
                        name="duration"
                        type="text"
                        value={duration}
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.duration && (
                        <div className="alert alert-danger">{errors.duration}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                        URL
                      </label>
                      <input
                        onChange={(e) => setUrl(e.target.value)}
                        onBlur={handleBlur}
                        name="url"
                        value={url}
                        type="text"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.url && (
                        <div className="alert alert-danger">{errors.url}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="d-flex ms-3 form-label"
                      >
                          Vedio
                      </label>
                      <input
                        // onChange={(e) => setImage(e.target.value)}
                        // onBlur={handleBlur}
                        onChange={handleImageChange}
                        name="image"
                        type="file"
                        
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.url && (
                        <div className="alert alert-danger">{errors.url}</div>
                      )}
                    </div>
                    <div className="">
                      <button
                        className="btn sign-btn_1 sign_btn"
                        // onClick={handleSubmit}
                        type="submit"
                      >
                        Save Course
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Other sections */}
          {/* ... */}
        </div>
      </div>
    </>
  );
}

export default AddCource



