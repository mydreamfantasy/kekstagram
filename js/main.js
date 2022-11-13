
import { getOtherPhotos } from'./photos.js';
import { validateForm } from './validation.js';
import { closeForm, openForm } from './open-loader.js';
import { toggleScale } from './toggler_scale.js';
import { changeFilter } from './slider.js';

getOtherPhotos();
validateForm();
openForm();
closeForm();
toggleScale();
changeFilter();
