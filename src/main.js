// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-button');

let currentQuery = '';
let page = 1;
let totalPages = 0;
const PER_PAGE = 15;


form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMore);


async function handleSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

currentQuery = query;
  page = 1;

  clearGallery();

  loadMoreBtn.hidden = true;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page, PER_PAGE);

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / PER_PAGE);

    createGallery(data.hits);

  
    
    if (page < totalPages) {
      loadMoreBtn.hidden = false;
    }

  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page, PER_PAGE);

    createGallery(data.hits);

    smoothScroll();
    
    if (page >= totalPages) {
      loadMoreBtn.hidden = true;

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (!firstCard) return;

  const { height: cardHeight } = firstCard.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth'
  });
}