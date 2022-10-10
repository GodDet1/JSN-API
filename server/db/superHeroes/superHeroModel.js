const { mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const superHeroSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  real_name: {
    type: String,
    required: true,
    unique: true,
  },
  origin_description: {
    type: String,
    required: true,
    unique: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
    unique: true,
  },
  images: {
    type: Array,
    default: [],
    minItems: 0,
    maxItems: 10,
    description: 'must be a array of string and max is 10',
  },
});

const SuperHero = mongoose.model('SuperHero', superHeroSchema);

module.exports = SuperHero;
