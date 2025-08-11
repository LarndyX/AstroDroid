// Estrellas de fondo
const numStars = 100;
const stars = [];

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  const [top, left] = getRandomPosition();
  star.style.top = top + 'px';
  star.style.left = left + 'px';
  document.body.append(star);
  stars.push(star);
}

function getRandomPosition() {  
  const y = window.innerWidth;
  const x = window.innerHeight;
  return [Math.floor(Math.random() * x), Math.floor(Math.random() * y)];
}

// Mostrar contenido principal tras la intro
document.body.classList.add('intro-active');

// Al finalizar la intro, antes de mostrar el contenido principal
setTimeout(() => {
  document.body.classList.remove('intro-active');
  document.getElementById('intro-container').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('main-content').classList.add('fade-in');

  // 🔥 Eliminar estrellas completamente
  for (let star of stars) {
    star.remove();
  }
}, 40000);