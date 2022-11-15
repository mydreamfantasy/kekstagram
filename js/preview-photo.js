const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PREVIEW_DEFAULT = 'img/upload-default-image.jpg';

const fileChooser = document.querySelector('.img-upload__input ');
const preview = document.querySelector('.img-upload__preview img');

const loadNewPhoto = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

const clearPhotos = () => {
  preview.src = PREVIEW_DEFAULT;
};

export { loadNewPhoto, clearPhotos };

