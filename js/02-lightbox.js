import { galleryItems } from './gallery-items.js';
// Change code below this line
console.dir(galleryItems);

const listRef = document.querySelector(".gallery");

const marcup = galleryItems
  .map(
    ({ description, preview, original }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

listRef.insertAdjacentHTML("beforeend", marcup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

`<li class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}">
    <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
  </a>
</li>`;








