

const similarPhotosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const fillPhoto = (photo, template) => {
  const photoListItem = template.cloneNode(true);
  photoListItem.src = photo;
};

const renderPhoto = ({ url, likes, comments }) => {

  const otherPhoto = similarPhotosTemplate.cloneNode(true);

  const photo = otherPhoto.querySelector('.picture__img');
  const likesCount = otherPhoto.querySelector('.picture__likes');
  const commentsCount = otherPhoto.querySelector('.picture__comments');

  if(url) {
    fillPhoto(url, photo);
  } else {
    url.remove();
  }

  if(likes) {
    likesCount.textContent = likes;
  } else {
    likesCount.remove();
  }

  if(comments) {
    commentsCount.textContent = comments;
  } else {
    commentsCount.remove();
  }
};

export { renderPhoto };
