const { mongoose } = require('mongoose');
const SuperHero = require('../db/superHeroes/superHeroModel');

const getSuperHeroesService = async (skip, limit) =>
  await SuperHero.find({}, '-__v', { skip, limit });

const getByIdSuperHeroService = async id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }

  const hero = await SuperHero.findById(id, '-__v');

  return hero;
};

const addSuperHeroService = async body => {
  const newHero = new SuperHero(body);
  const data = await newHero.save();

  return data;
};

const deleteSuperHeroService = async id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }

  const data = await SuperHero.findByIdAndDelete(id).select('-__v');
  return data;
};

const updateSuperHeroService = async (id, body) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }

  const data = await SuperHero.findByIdAndUpdate(id, body, { returnDocument: 'after' }).select(
    '-__v'
  );
  return data;
};

const updateImagesPath = async (nickname, images) => {
  const heroImages = await SuperHero.findOneAndUpdate(
    { nickname },
    { images },
    { returnDocument: 'after' }
  );
  return heroImages;
};

const getImageByName = async nickname => await SuperHero.findOne({ nickname }).select('images');

module.exports = {
  getSuperHeroesService,
  getByIdSuperHeroService,
  addSuperHeroService,
  deleteSuperHeroService,
  updateSuperHeroService,
  updateImagesPath,
  getImageByName,
};
