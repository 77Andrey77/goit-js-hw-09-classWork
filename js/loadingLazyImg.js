

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