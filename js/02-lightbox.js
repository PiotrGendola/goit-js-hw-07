import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesList = document.querySelector("ul.gallery");
const galleryCards = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href=${original}>
<img
    class="gallery__image"
    src=${preview}
    alt=${description}
/>
</a>`;
    })
    .join("");
}
imagesList.insertAdjacentHTML("beforeend", galleryCards);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
