import { galleryItems } from './gallery-items.js';
// Change code below this line



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


listRef.addEventListener('click', onClick);

let instance;

function onClick(evt){
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgEl = evt.target.dataset.source;

     instance = basicLightbox.create(`
      <img src="${imgEl}" width="800" height="600">
  `,{
  onShow: ()=> {
     document.addEventListener("keydown", onEscapeClick);
     document.body.style.overflow = "hidden"
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscapeClick);
    document.body.style.overflow = "visible";
  }
  });

  instance.show()
};

function onEscapeClick(evt) {
    if (evt.code !== "Escape") {
      return
    }
    instance.close();
    
}




