const express = require('express');
const router = express.Router();
const {getProducts, dellProduct,addProduct,getCources,addCources,dellCource,getSingleProduct,
      updateSingleProduct,updateCource,adminSigin,adminRegister } = require('../controllers/Admin')
// Multer for Upload Vedios and Images
const multer = require('multer');
const path = require('path');
// Products Routes
// router.route('/getProducts').get(getProducts);
router.route('/dellProduct/:_id').delete(dellProduct);

// admin sigin and register routes
router.route('/adminSigin').post(adminSigin);
router.route('/adminRegister').post(adminRegister);
// admin sigin and register routes end

// Multer for Upload Cources
// Cources Routes
router.route('/getCources').get(getCources);
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '.backend/upload');
      },
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });
  const upload = multer({ storage });
router.post("/addCources", upload.single("image"), addCources);
// Multer end here



// Multer for Upload Product Images
router.route('/getProducts').get(getProducts);

router.post("/addProduct", upload.single("image"), addProduct);
// router.route('/addProduct').post(addProduct);






// Update Product 
router.route('/updateProduct/:_id').put(updateSingleProduct);
// Firts Get Product according to id 
router.route('/getSingleProduct/:id').get(getSingleProduct);

router.route('/dellCource/:_id').delete(dellCource);
router.route('/updateCource/:_id').put(updateCource);

module.exports = router