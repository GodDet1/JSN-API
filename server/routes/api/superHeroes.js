const express = require('express');
const {
  getSuperHeroesCtrl,
  getByIdSuperHeroesCtrl,
  addSuperHeroesCtrl,
  deleteSuperHeroesCtrl,
  updateSuperHeroesCtrl,
} = require('../../controllers/superHeroesCtrl');
const errorWrapper = require('../../helpers/errorWrapper');

const { validateSuperHeroes } = require('../../helpers/validation');

const router = express.Router();

router.get('/', errorWrapper(getSuperHeroesCtrl));
router.get('/:heroId', errorWrapper(getByIdSuperHeroesCtrl));
router.post('/', validateSuperHeroes, errorWrapper(addSuperHeroesCtrl));
router.put('/:heroId', validateSuperHeroes, errorWrapper(updateSuperHeroesCtrl));
router.delete('/:heroId', errorWrapper(deleteSuperHeroesCtrl));

module.exports = router;
