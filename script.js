// Add Victec's WhatsApp number below in international format, without +, spaces or dashes.
// Example Zimbabwe format: 263771234567
const WHATSAPP_NUMBER = "ADD_VICTEC_NUMBER";
const WHATSAPP_MESSAGE = "Hello Victec, I would like to discuss a project.";

const whatsappLink = document.querySelector(".whatsapp-link");
if (whatsappLink) {
  if (WHATSAPP_NUMBER !== "ADD_VICTEC_NUMBER" && /^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  } else {
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add Victec's WhatsApp number in script.js before publishing the website.");
    });
  }
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
