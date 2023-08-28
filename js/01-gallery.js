import { galleryItems } from './gallery-items.js';
// Change code below this line



function createImgCardsMarkup(images) {

return images.map(({ preview, original, description }) => {

return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="large-image.jpg"
    alt="${description}"
  />
</a>
</li>`

}).join('');
};

const galleryBoxesRef = document.querySelector('.gallery');
const createGalleryList = createImgCardsMarkup(galleryItems);
galleryBoxesRef.insertAdjacentHTML('beforeend', createGalleryList);

galleryBoxesRef.addEventListener('click', onGalleryBoxesClick);

function onGalleryBoxesClick(e) {
    e.preventDefault();
    const isImgSwatchEl = e.target.classList.contains('.gallery__image');

    if (!isImgSwatchEl) {
        return;        
    }


};

// function onOpenModalWindowImgClick(e) {
  
// };


import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create();

instance.show(createImgCardsMarkup);