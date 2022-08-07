const modalEl = document.querySelector('.js-lightbox');
const imageEl = document.querySelector('.lightbox__image');
const closeBtnEl = document.querySelector('.lightbox__button');

import onCloseModal from "./onCloseModal";
import onCloseModalOverlay from "./onCloseModalOverlay";
import onCloseModalESC from "./onCloseESC";
import onScrollImg from "./onScrollImg";


//открытие модалки
export default function onOpenModal(e) {
  e.preventDefault();

  if (e.target.nodeName !=='IMG') {
    return;
  };
  //  if (!e.target.classList.contains('gallery__image')) {
  //   return;
  // };

  modalEl.classList.add('is-open');
  imageEl.src = e.target.dataset.source;
  imageEl.alt = e.target.alt;
  
  closeBtnEl.addEventListener('click', onCloseModal, { once: true });
  modalEl.addEventListener('click', onCloseModalOverlay);
  window.addEventListener('keydown', onCloseModalESC);
  
  window.addEventListener('keydown', onScrollImg);
};