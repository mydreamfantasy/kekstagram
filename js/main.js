
import { getOtherPhotos } from'./photos.js';
import { validateForm } from './validation.js';
import { closeForm, openForm } from './open-loader.js';
import './slider.js';
import { toggleEffects } from './toggler_effects.js';

getOtherPhotos();
validateForm();
openForm();
closeForm();
toggleEffects();
