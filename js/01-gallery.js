import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(createGellaryItems(galleryItems));

const palletContainer = document.querySelector('.gallery');
const createGallery = createGellaryItems(galleryItems);

palletContainer.insertAdjacentHTML('beforeend', createGallery);

palletContainer.addEventListener('click', onGalleryIttemsClick);

// palletContainer.onGalleryIttemsClick('beforeend', onGalleryIttemsClick);

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

    // console.log(evt.target.dataset.source);
    basicLightbox.create(`
    <div class="modal">
    <img width="1400" height="900" src="${evt.target.dataset.source}">
        </div>
	`).show()
    
   


}

// basicLightbox.create(`
// <img width="1400" height="900" src="https://placehold.it/1400x900">
// `).show()


