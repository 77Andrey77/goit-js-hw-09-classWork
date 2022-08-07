import onCloseModal from "./onCloseModal";

//закрытие модалки по  Escape
export default function onCloseModalESC(e) {
  if (e.key !== 'Escape') {
    return;
  }
  onCloseModal();
};