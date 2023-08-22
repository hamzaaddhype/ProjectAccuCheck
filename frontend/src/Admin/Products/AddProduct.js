  import React, { useState } from "react";
  import Swal from "sweetalert2";
  import Joi from "joi-browser";
  import axios from "axios";
  const AddProduct = () => {
    let [title, settitle] = useState("");
    let [id, setId] = useState("");
    let [description, setdiscription] = useState("");
    let [points, setPoints] = useState("");
    let [category, setCategory] = useState("");
    let [image, setImage] = useState(null);
    const categories = ["Products", "Food", "Gifts","Electronics", "Clothing", "Desserts"];
    let [product, setProduct] = useState({
      title: "",
      id: "",
      description: "",
      points: "",
      category:"",
      image,
    });
    let handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
    const [errors, setErrors] = useState({});

  
    const schema = {
      title: Joi.string().min(3).max(50).required(),
      id: Joi.number().min(0).max(9999).required(),
      description: Joi.string().min(5).max(500).required(),
      points: Joi.number().min(0).max(9999).required(),
      category: Joi.string().min(1).max(20).required(),
      image: Joi.string()
    };
  
    const validateProperty = (name, value) => {
      const obj = { [name]: value };
      const subSchema = { [name]: schema[name] };
      const result = Joi.validate(obj, subSchema);
      const { error } = result;
      return error ? error.details[0].message : null;
    };
  
    const handleBlur = (event) => {
      const { name, value } = event.target;
      const error = validateProperty(name, value);
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };

    let handleSubmit = async (e) => {
      e.preventDefault();
  
      let formData = new FormData();
      formData.append("title", title);
      formData.append("id", id);
      formData.append("description", description);
      formData.append("points", points);
      formData.append("category", category);
      formData.append("image", image);
  
      try {
        console.log("IN If Condointment")
        // send a POST request to the server to add the product
        let response = await axios.post("http://localhost:5000/Admin/addProduct", formData);
        // console.log(response.data); 
        // const response1 =response.json();
        if(response.status=== 201){
        Swal.fire("success!", "Product add Sucessfuly!", "success");
      
      // navigate('/user')
      window.alert("Successfull")
    }else{
      Swal.fire({
        position:"center",
        icon: "error",
        title: "Oops...",
        text: "Product added Failed",
      });
    } 
      } catch (error) {
        console.log(error);
      }    
          formData = { title, id, description, points,category, image };
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

    
   
    return (
      <div className="c" id="admin_user">
        <div className="row">
          <div className="col-md-6" id="div_center">
            <div className="row left_padding">
              <div className="row text-center mt-3">
                <h3 className="d-flex fw-bold mb-2 justify-content-center">
                  Add Product
                </h3>
              </div>
              <div className="row">
                <div className="form_body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                      <label htmlFor="name" className="d-flex ms-3 mb-1">
                        Title
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => settitle(e.target.value)}
                        name="title"
                        type="text"
                        className="form-control inputs_background"
                        id="user_name"
                        value={title}
                      />
                      {errors.title && (
                        <div className="alert alert-danger  ">{errors.title}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="d-flex ms-3 mb-1">
                        SKU Number
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setId(e.target.value)}
                        name="id"
                        type="number"
                        className="form-control inputs_background"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={id}
                      />
                      {errors.id && (
                        <div className="alert alert-danger">{errors.id}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Description
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setdiscription(e.target.value)}
                        name="description"
                        type="text"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.description && (
                        <div className="alert alert-danger">{errors.description}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Points
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setPoints(e.target.value)}
                        name="points"
                        type="number"
                        className="form-control inputs_background"
                        id="points"
                        value={points}
                      />
                      {errors.points && (
                        <div className="alert alert-danger">{errors.points}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Category
                      </label>
                      <select
                        onBlur={handleBlur}
                        onChange={(e) => setCategory(e.target.value)}
                        name="category"
                        className="form-control inputs_background textarea"
                        id="category"
                        value={category}
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <div className="alert alert-danger">{errors.category}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Image
                      </label>
                      <input
                        onBlur={handleBlur}
                        // onChange={(e) => setProduct({ ...product, points: e.target.value })}
                        className="form-control inputs_background"
                        onChange={handleImageChange}
                        name="image"
                        type="file"
                      />
                      {/* {errors.points && (
                        <div className="alert alert-danger">{errors.points}</div>
                      )} */}
                    </div>
                    <br />
                    <div className="">
                      <button
                        className="btn sign-btn_1 sign_btn "
                        type="submit"
                        value="Submit"
                      >
                        Save Product
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
  
  export default AddProduct;
  