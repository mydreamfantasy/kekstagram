
import { createPhotos } from './data.js';
import { renderPhoto } from './photos.js';


const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const photos = createPhotos();
const otherPictures = renderPhoto(photos[5]);
fragment.append(otherPictures);
pictures.append(fragment);
