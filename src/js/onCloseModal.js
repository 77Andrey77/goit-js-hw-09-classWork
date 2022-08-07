import onCloseModalOverlay from "./onCloseModalOverlay";
import onCloseModalESC from "./onCloseESC";
import onScrollImg from "./onScrollImg";

const modalEl = document.querySelector('.js-lightbox');
const imageEl = document.querySelector('.lightbox__image');

//закрытие модалки
export default function onCloseModal() {
  modalEl.classList.remove('is-open');
  imageEl.src = '';
  imageEl.alt = '';

  modalEl.removeEventListener('click', onCloseModalOverlay);
  window.removeEventListener('keydown', onCloseModalESC);
  window.removeEventListener('keydown', onScrollImg);
};

