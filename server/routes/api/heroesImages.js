const express = require('express');
const path = require('path');
const { updateHeroImageCtrl, deleteHeroImageCtrl } = require('../../controllers/heroImageCTRL');
const { errorWrapper } = require('../../helpers');
const uploadMiddleware = require('../../helpers/middleware/uploadMiddleware');
const router = express.Router();

const IMAGE_PATH = path.resolve('./static');

router.use('/download', express.static(IMAGE_PATH));
router.patch(
  '/images/:nickname',
  [uploadMiddleware.array('images')],
  errorWrapper(updateHeroImageCtrl)
);
router.delete('/images/delete/:nickname/:imagePath', errorWrapper(deleteHeroImageCtrl));

module.exports = router;
