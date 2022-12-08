import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galaryEl = document.querySelector(".gallery");

const cardsMarkup = onCreateGalaryElements(galleryItems);

// Функція створення айтемів галереї
function onCreateGalaryElements(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    })
    .join("");
}

galaryEl.insertAdjacentHTML("beforeend", cardsMarkup);

galaryEl.addEventListener("click", onGetOriginalPicture);

// Функція відкриття великої картинки
function onGetOriginalPicture(event) {
  onCheckImgElement(event);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  removeTransitionOnLink(event);

  galaryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
  //   function onCloseEsc(event) {
  //     if (event.code === "Escape") {
  //       instance.close();
  //     }
  //     console.log(instance.close());
  //   }
  //   onCloseEsc(event);
}

// Функція перевірки таргету
function onCheckImgElement(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

// функція відключення переходу по посиланню
function removeTransitionOnLink(event) {
  event.preventDefault();
}
