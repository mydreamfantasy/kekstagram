import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './modal.js';
import { clearPhotos } from './preview-photo.js';
import { setDefaultEffects } from './slider.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const photoForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const loader = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const pristine = new Pristine(photoForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
}, false);

const closeLoader = () => {
  loader.classList.add('hidden');
  body.classList.remove('modal-open');
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const resetForm = () => {
  imageUploadForm.reset();
  clearPhotos();
};

const onSendError = () => {
  showErrorMessage();
  unblockSubmitButton();
};

const onSendSuccess = () => {
  showSuccessMessage();
  resetForm();
  unblockSubmitButton();
  closeLoader();
  setDefaultEffects();
};

const validateForm = () => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        onSendSuccess,
        onSendError,
      );
    }
  });
};

export { validateForm };
