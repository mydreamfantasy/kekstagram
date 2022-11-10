
import { getOtherPhotos } from'./photos.js';
import { validateForm } from './validation.js';
import { closeForm, openForm } from './open-loader.js';


getOtherPhotos();
validateForm();
openForm();
closeForm();
