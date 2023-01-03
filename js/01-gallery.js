import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(createGellaryItems(galleryItems));

function createGellaryItems(galleryItems){
    const imageCards = galleryItems.map(galleryItem => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="small-image.jpg"
                data-source="large-image.jpg"
                alt="Image description"
                />
            </a>
        </div>
    `;
    });
    console.log(imageCards);
}


