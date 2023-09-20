import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesList = document.querySelector("ul.gallery");
const galleryCards = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href=${original}>
<img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
/>
</a>
</div>`;
    })
    .join("");
}
imagesList.insertAdjacentHTML("beforeend", galleryCards);
imagesList.addEventListener("click", galleryElement);

function galleryElement(event) {
  event.preventDefault();
  basicLightbox
    .create(
      `
  <img width="800" height="600" src=${event.target.dataset.source}>
`
    )
    .show();
}
