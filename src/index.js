import galleryItems from "./js/gallery-items.js";

import onOpenModal from "./js/onOpenModal.js";

const galleryEl = document.querySelector('.js-gallery');

const createItem = (option) => 
`<li class="gallery__item">
  <a
    class="gallery__link"
    href="${option.original}"
  >
    <img
    loading="lazy"
      class="gallery__image lazyload"
      data-src="${option.preview}"
      data-source="${option.original}"
      alt="${option.description}"
    />
  </a>
</li>`;

//делаем галерею
const createGalerry = galleryItems.map(createItem).join('');
galleryEl.innerHTML = createGalerry;
///////////////////////

if ('loading' in HTMLImageElement.prototype) {

  console.log('поддерживает линивки');
  const lazyLoading = document.querySelectorAll('img[loading="lazy"]');
  lazyLoading.forEach(img => { img.src = img.dataset.src });
  
} else {

    console.log('ne поддерживает линивки');
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";

  document.body.appendChild(script);
}

galleryEl.addEventListener('click', onOpenModal);



