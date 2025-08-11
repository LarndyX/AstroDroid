// Ocultar intro tras 40s y mostrar el contenido principal
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 15000);

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = contactForm.nombre.value.trim();
  const email = contactForm.email.value.trim();
  const mensaje = contactForm.mensaje.value.trim();

  if (nombre && email && mensaje) {
    formStatus.textContent = "Mensaje enviado correctamente 🚀";
    formStatus.style.color = "green";
    contactForm.reset();
  } else {
    formStatus.textContent = "Por favor, completa todos los campos.";
    formStatus.style.color = "red";
  }
});

const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let position = 0;

nextBtn.addEventListener("click", () => {
    if (position > -(track.children.length - 1) * 300) {
        position -= 300;
        track.style.transform = `translateX(${position}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (position < 0) {
        position += 300;
        track.style.transform = `translateX(${position}px)`;
    }
});
