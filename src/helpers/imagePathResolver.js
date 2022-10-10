const URL = 'http://localhost:3010/api/files/download/images';

const imagePathResolver = (heroName, imagePath) => {
  if (!imagePath) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
  }
  return `${URL}/${heroName}/${imagePath}`;
};

export default imagePathResolver;
