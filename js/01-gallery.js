import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryItemHolder = document.querySelector(".gallery");
function getGalleryMarkup(items) {
  const resultMarkup = items
    .map((item) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src= "${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`;
    })
    .join("");
  return resultMarkup;
}
const galleryMarkup = getGalleryMarkup(galleryItems);

galleryItemHolder.innerHTML = galleryMarkup;
galleryItemHolder.addEventListener("click", zoomGalleryItem);

function zoomGalleryItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalImage = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  modalImage.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalImage.close();
    }
  });
}
