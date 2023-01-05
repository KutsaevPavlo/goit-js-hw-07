import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(createGellaryItems(galleryItems));

const palletContainer = document.querySelector('.gallery');
const createGallery = createGellaryItems(galleryItems);

palletContainer.insertAdjacentHTML('beforeend', createGallery);

palletContainer.addEventListener('click', onGalleryIttemsClick);

function createGellaryItems(galleryItems){
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `;
    }).join('');
    
}


function onGalleryIttemsClick(evt) { 
    const isGalleryIttems = evt.target.classList.contains('gallery__image');

    evt.preventDefault();

    if ( !isGalleryIttems) {
        return;
       
    }  

    console.log(evt.target.dataset.source);
    
   
}

// const basicLightbox = require('basiclightbox')

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

