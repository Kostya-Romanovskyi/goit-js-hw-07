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
  //   onCheckImgElement(event);

  // відключення переходу по посиланню
  event.preventDefault();

  // перевірка таргета
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
// `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.code === "Escape") {
            instance.close();
          }
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (event) => {
          if (event.code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
}
