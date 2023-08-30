import { galleryItems } from './gallery-items.js';
// Change code below this line

function createImgCardsMarkup(images) {

  return images.map(({ preview, original, description }) => {
  
  return `<li class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </li>`
  
  }).join('');
  };
  
  const createGalleryList = createImgCardsMarkup(galleryItems);
  const galleryBoxesRef = document.querySelector('.gallery');
  galleryBoxesRef.insertAdjacentHTML('beforeend', createGalleryList);


  galleryBoxesRef.addEventListener('click', onOpenModalBoxesClick);

function onOpenModalBoxesClick(e) {
  e.preventDefault();
    
    const isImgSwatchEl = e.target.classList.contains('gallery__image');
    
    if (!isImgSwatchEl){
      return;        
  }
      const targetOriginImage = e.target.dataset.source;

      const instance = basicLightbox.create(`
      <img src="${targetOriginImage}" width="800" height="600">
      `)
      
     instance.show()

     window.addEventListener('keydown', e => {

      if (e.code === "Escape") {

        instance.close();
      }

    return window.removeEventListener('keydown');
     });

};