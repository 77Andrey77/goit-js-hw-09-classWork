import onCloseModal from "./onCloseModal";

//закрытие модалки по Overlay

export default function onCloseModalOverlay(e) {
  if (e.target.classList.contains('lightbox__overlay')) {
     onCloseModal();
  }
};