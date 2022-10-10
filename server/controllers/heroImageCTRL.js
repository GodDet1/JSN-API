const fsService = require('../services/fsServices');
const superHeroService = require('../services/superHeroService');

const updateHeroImageCtrl = async (req, res) => {
  const nickname = req.params.nickname;

  const images = await fsService.readData(nickname);

  console.log('nickname:', nickname);
  console.log('images:', images);
  const x = await superHeroService.updateImagesPath(nickname, images);
  console.log(x);

  res.status(200).json({ images, message: 'success' });
};

const deleteHeroImageCtrl = async (req, res) => {
  const nickname = req.params.nickname;
  const imagePath = req.params.imagePath;

  await fsService.deleteFile(nickname, imagePath);

  const { images } = await superHeroService.getImageByName(nickname);

  const deletedImageArr = images.filter(image => image !== imagePath);

  await superHeroService.updateImagesPath(nickname, deletedImageArr);

  res.status(200).json({ images: deletedImageArr, status: 'success' });
};

module.exports = { updateHeroImageCtrl, deleteHeroImageCtrl };
