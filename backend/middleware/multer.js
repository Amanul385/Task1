const multer = require("multer");
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, 'public', 'img');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    req.file = file; // This is optional
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ 
  storage: storage // Set file size limit (50MB in this example)
});

module.exports = upload;
