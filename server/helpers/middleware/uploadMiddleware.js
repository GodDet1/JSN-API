const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const IMAGE_PATH = path.resolve(process.env.IMAGE_PATH);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const nickname = req.params.nickname;
    callback(null, path.resolve(IMAGE_PATH, nickname));
  },
  filename: (req, files, callback) => {
    const [, extencion] = files.originalname.split('.');

    callback(null, `${uuidv4()}.${extencion}`);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
