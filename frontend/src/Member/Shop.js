import React from 'react'
import { useState,useEffect } from 'react';
import Loader from '../components/Loader';
const Shop = () => {
  const [getProducts, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('All');






  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch("http://localhost:5000/Admin/getProducts");
    result = await result.json();
    console.log(result);
    if(result<0){
      result.send("<h1>No Data!</h1>")
    }
    console.log("Result from API Members list", result);
    setProducts(result);
    console.log(result._id)
    setLoading(false)
  };
  return (
    <>
     {isloading?(
      <Loader />
    ):( 
      <div className='position-absolute' style={{marginLeft:'20%',width:"80%"}}>
       <div className='container  shop_container for_common_Top_margin shop_remove_border shop_container_height' style={{width:'95%'}} >
         <div className='row'>
            <div className='col-md-6'>
                <div className='row '>
                    <h3>Shop</h3>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='row justify-content-end'>
                   <dic className="col-4 ">
                      <input type='serch' />
                   </dic>
                </div>
            </div>
        </div>
        {/* Filter Buttons Row */}
        <div className='row'>
    <div className='col-md-12'>
        <div className='d-flex justify-content-between'>
        <button
          className={`btn common_button font_family_common btn_equal ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}>
          All
        </button>
        {/* 2nd button */}
        <button
          className={`btn common_button font_family_common btn_equal ${selectedCategory === 'Products' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Products')}>
          Products
        </button>
            {/*3rd Button  */}
            <button
              className={`btn common_button font_family_common btn_equal ${selectedCategory === 'Food' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Food')}>
              Food
            </button>
            {/* 4th Button */}
            <button
            className={`btn common_button font_family_common btn_equal ${selectedCategory === 'Gift' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Gift')}>
            Gifts
          </button>
          {/* 5th Button */}
          <button
            className={`btn common_button font_family_common btn_equal ${selectedCategory === 'Clothing' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Clothing')}>
            Clothing
          </button>
          {/* 6th Button */}
          <button
            className={`btn common_button font_family_common btn_equal ${selectedCategory === 'Dessert' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Dessert')}>
            Dessert
          </button>
        </div>
    </div>
</div>

    </div>
     {/* </div> */}
   

{/* Products Cards */}
{/* <div className="c" id="admin_user"> */}

<div className='container shop_container'>
<div className="row">
{getProducts.filter(product => selectedCategory === 'All' || product.category === selectedCategory).map((product) =>{
  return(
    <div className='col-md-3 mb-5 set_card_showdow'>
            <div className="card product_card border-0" >
                <img src={`http://localhost:5000/acuucheckProject/backend/uploads/${product.image}`} height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">{product.title}</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">{product.points}</h5>
                  </div>
                  <p className="card-text">{product.description}</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
             </div>
  )
})}
      </div>
    </div>
      </div>
      )}
    </>
  )
}

export default Shop