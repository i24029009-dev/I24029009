// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Exit Popup
const popup = document.getElementById("exitPopup");
const closePopup = document.getElementById("closePopup");

let popupShown = false;

document.addEventListener("mouseout", function (e) {
  if (!popupShown && e.clientY < 10 && popup) {
    popup.classList.add("show");
    popupShown = true;
  }
});

if (closePopup && popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
}// JavaScript Document