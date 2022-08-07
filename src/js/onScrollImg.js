import galleryItems from "./gallery-items.js";
const imageEl = document.querySelector('.lightbox__image');

//лайдер картинок
export default function onScrollImg(e) {
  let imgIndex = galleryItems.findIndex(img => img.original === imageEl.src);

  if (e.key === 'ArrowLeft') {
    if (imgIndex === 0) {
      imgIndex = galleryItems.length-1;
    } else {
      imgIndex -= 1;
    }
  } else if (e.key === 'ArrowRight') {
    if (imgIndex === galleryItems.length - 1) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }
  }
  imageEl.src = galleryItems[imgIndex].original;
  imageEl.alt = galleryItems[imgIndex].description;
};
