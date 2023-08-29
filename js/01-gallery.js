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


  galleryBoxesRef.addEventListener('click', onGalleryBoxesClick);

function onGalleryBoxesClick(e) {
  e.preventDefault();
    
    const isImgSwatchEl = e.target.classList.contains('.gallery__image');
    
    if (!isImgSwatchEl){
      return;        
  } else {
   
      const targetOriginImage = e.target.dataset.source;

      const instance = basicLightbox.create(`
      <img src="${targetOriginImage}" width="800" height="600">
      `)
      
     instance.show()
  }
};