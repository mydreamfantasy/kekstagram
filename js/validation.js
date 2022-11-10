

const photoForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(photoForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
}, false);

const validateForm = () => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      // console.log('Можно отправлять');
    } else {
      // console.log('Форма невалидна');
    }
  });
};

export { validateForm };
