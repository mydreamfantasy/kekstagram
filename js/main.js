
import { validateForm } from './validation.js';
import { loadPhotos } from './render-other-photos.js';
import { closeForm, openForm } from './open-loader.js';


loadPhotos();
openForm();
closeForm();
validateForm();
