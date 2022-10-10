const fs = require('fs/promises');
const path = require('path');

const IMAGE_PATH = process.env.IMAGE_PATH;

const createFolder = async name => {
  const dir = path.resolve(IMAGE_PATH, name);

  await fs.mkdir(dir);
};

const deleteFolder = async name => {
  const dir = path.resolve(IMAGE_PATH, name);

  await fs.rm(dir, { recursive: true });
};

const deleteFile = async (nickname, imageName) => {
  const dir = path.resolve(IMAGE_PATH, nickname, imageName);
  await fs.unlink(dir);
};

const readData = async name => {
  const dir = path.resolve(IMAGE_PATH, name);

  const images = await fs.readdir(dir);

  return images;
};

const renameFolder = async (oldname, newname) => {
  const oldDir = path.resolve(IMAGE_PATH, oldname);
  const newDir = path.resolve(IMAGE_PATH, newname);

  console.log(oldDir);
  console.log(newDir);

  await fs.rename(oldDir, newDir);
};

module.exports = { createFolder, deleteFolder, readData, deleteFile, renameFolder };
