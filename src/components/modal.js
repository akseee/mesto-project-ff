export const openModal = (popup) => {
  popup.classList.add("popup_is-animated");
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", mouseHandler);
  document.addEventListener("keydown", escapeHandler);
};

export const closeModal = (popup) => {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", mouseHandler);
  document.removeEventListener("keydown", escapeHandler);
};

function escapeHandler(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

function mouseHandler(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closeModal(evt.target);
  }
}
