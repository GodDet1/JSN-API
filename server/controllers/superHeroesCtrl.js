const {
  getSuperHeroesService,
  getByIdSuperHeroService,
  addSuperHeroService,
  deleteSuperHeroService,
  updateSuperHeroService,
} = require('../services/superHeroService');
const RequestError = require('../helpers/requestError');
const fsService = require('../services/fsServices');

const getSuperHeroesCtrl = async (req, res) => {
  const { page = 1, per_page = 5 } = req.query;
  // eslint-disable-next-line camelcase
  const skip = (+page - 1) * +per_page;
  const superHeroList = await getSuperHeroesService(skip, per_page);

  res.json(superHeroList);
};

const getByIdSuperHeroesCtrl = async (req, res) => {
  const id = req.params.heroId;

  const data = await getByIdSuperHeroService(id);

  if (!data) {
    throw RequestError(404);
  }

  res.json(data);
};

const addSuperHeroesCtrl = async (req, res) => {
  const data = await addSuperHeroService(req.body);

  await fsService.createFolder(data.nickname);

  res.status(201).json(data);
};

const deleteSuperHeroesCtrl = async (req, res) => {
  const id = req.params.heroId;

  const data = await deleteSuperHeroService(id);

  if (!data) {
    throw RequestError(404);
  }

  await fsService.deleteFolder(data.nickname);

  res.json({ message: 'Success' });
};

const updateSuperHeroesCtrl = async (req, res) => {
  const id = req.params.heroId;
  const { nickname: oldName } = await getByIdSuperHeroService(id);
  const data = await updateSuperHeroService(id, req.body);

  await fsService.renameFolder(oldName, data.nickname);

  if (!data) {
    throw RequestError(404);
  }

  res.json({ message: 'Success' });
};

module.exports = {
  getSuperHeroesCtrl,
  getByIdSuperHeroesCtrl,
  addSuperHeroesCtrl,
  deleteSuperHeroesCtrl,
  updateSuperHeroesCtrl,
};
