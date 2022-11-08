import {
  getRandomArrayElement,
  getRandomPositiveInteger,
  makeCounterIndex
} from './util.js';

const SIMILAR_PHOTOS = 25;

const DESCRIPTION = [
  'Останавливайтесь здесь и не пожалеете',
  'Лучшее место, чтобы придаться блаженству',
  'Виды - это наш конек! ',
  'Вдали от шумных улиц и запахов еды',
  'Самое топовое место среди аутентичных улиц и кучи проводов',
];

const counterId = makeCounterIndex();
const counterUrl = makeCounterIndex();


const getOtherPhotos = () => ({
  id: counterId().toString(),
  url: `photos/${counterUrl().toString().padStart(2, '0')}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const createPhotos = () => Array.from({length: SIMILAR_PHOTOS}, getOtherPhotos);

export { createPhotos };
