import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const palletContainer = document.querySelector('.gallery');
const createGallery = createGellaryItems(galleryItems);

palletContainer.insertAdjacentHTML('beforeend', createGallery);

function createGellaryItems(galleryItems){
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
    
}

// palletContainer.addEventListener('click', onGalleryIttemsClick);


// function onGalleryIttemsClick(evt) { 
//     const isGalleryIttems = evt.target.classList.contains('gallery__image');

//     evt.preventDefault();

//     if ( !isGalleryIttems) {
//         return;
       
//     }  
    
// }

new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionDelay: 250,

 });