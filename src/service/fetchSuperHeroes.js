import axios from 'axios';

const URL_API = 'http://localhost:3010/api/super_heroes';
const URL_IMAGE_LOAD = 'http://localhost:3010/api/files/images';
const URL_IMAGE_DELETE = 'http://localhost:3010/api/files/images/delete';

const getSuperHeroes = async () => await axios.get(URL_API);
const getSuperHeroesById = async id => await axios.get(`${URL_API}/${id}`);
const updateSuperHeroesById = async (id, data) =>
  await axios.put(`${URL_API}/${id}`, data);
const deleteHeroById = async id => await axios.delete(`${URL_API}/${id}`);
const createHero = async data => await axios.post(`${URL_API}`, data);

const patchPicture = async (nickname, formDataImages) =>
  axios.patch(`${URL_IMAGE_LOAD}/${nickname}`, formDataImages, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const deletePicture = async (nickname, imageId) =>
  await axios.delete(`${URL_IMAGE_DELETE}/${nickname}/${imageId}`);

export {
  getSuperHeroes,
  getSuperHeroesById,
  updateSuperHeroesById,
  deleteHeroById,
  createHero,
  patchPicture,
  deletePicture,
};
