// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')
const loaderEl = document.querySelector('.loader')

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><p class="info-item-text">Likes</p> <p class="info-item-value">${likes}</p></li>
            <li class="info-item"><p class="info-item-text">Views</p> <p class="info-item-value">${views}</p></li>
            <li class="info-item"><p class="info-item-text">Comments</p> <p class="info-item-value">${comments}</p></li>
            <li class="info-item"><p class="info-item-text">Downloads</p> <p class="info-item-value">${downloads}</p></li>
          </ul>
        </li>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').hidden = false;
}

export function hideLoader() {
  document.querySelector('.loader').hidden = true;
}
