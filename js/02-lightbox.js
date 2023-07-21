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

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
//   className: 'sl-prev',
//   additionalHtml: true,
//   download: `${galleryItems.description}`,
  //   nav: true,
  captionPosition: "bottom",
});

`<li class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}">
    <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
  </a>
</li>`;








