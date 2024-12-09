const express = require("express");
const router = express.Router();

const {signupForm , loginForm , infoData} = require("../controller/fatchData");
const upload  = require("../middleware/multer");

router.post("/signup",signupForm);
router.post("/login",loginForm);
router.post("/infoData",upload.single('file'),infoData);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const{signup,login} = require("../Controllers/Auth");

// router.post("/signup",signup);
// router.post("/login",login);

// module.exports = router;
