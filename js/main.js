
import {getOtherPhotos} from'./photos.js';

const formOpen = document.querySelector('.img-upload__overlay');
formOpen.classList.remove('hidden');

getOtherPhotos();
