// noticias.js moderno 2026

// Array de noticias compartido
const noticias = [
  {
    titulo: "⚽ El auge del deporte femenino",
    descripcion: "El reconocimiento y apoyo al deporte femenino crece a nivel mundial.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    fecha: "24 Ene 2026",
    categoria: "Deportes",
    link: "No_disponible.html"
  },
  {
    titulo: "🤖 Inteligencia Artificial en la educación",
    descripcion: "La IA transforma la forma en que aprendemos y enseñamos en las aulas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    fecha: "23 Ene 2026",
    categoria: "Tecnología",
    link: "No_disponible.html"
  },
  {
    titulo: "🎭 Cultura digital en expansión",
    descripcion: "El arte y la música se reinventan con realidad aumentada y plataformas digitales.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    fecha: "22 Ene 2026",
    categoria: "Cultura",
    link: "No_disponible.html"
  },
  {
    titulo: "🚀 Exploración espacial interplanetaria",
    descripcion: "Nuevas misiones espaciales abren camino a la exploración de Marte y más allá.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    fecha: "21 Ene 2026",
    categoria: "Internacional",
    link: "No_disponible.html"
  },
  {
    titulo: "🌱 Economía verde y sostenible",
    descripcion: "La transición energética impulsa nuevas oportunidades de inversión y desarrollo.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    fecha: "20 Ene 2026",
    categoria: "Economía",
    link: "No_disponible.html"
  }
];

// Función para renderizar noticias en cualquier contenedor
function renderNoticias(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  noticias.forEach(noticia => {
    const card = document.createElement("article");
    card.classList.add("news-card");
    card.innerHTML = `
      <a href="${noticia.link}">
        <img src="${noticia.img}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p class="news-desc">${noticia.descripcion}</p>
        <p class="news-meta">${noticia.fecha} · ${noticia.categoria}</p>
      </a>
    `;
    contenedor.appendChild(card);
  });
}

// Inyectar CSS dinámicamente (horizontal pasarela)
(function addNoticiasCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
 .carousel-wrapper {
  position: relative;
  width: 100%;
}

#news-carousel {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;   /* ocultamos scroll manual */
  padding: 10px;
  scroll-behavior: smooth;
}

.news-card {
  min-width: 250px;
  background: #1e1e2f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.news-card a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 12px;
}

.news-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.news-card h3 {
  font-size: 1rem;
  margin: 0 0 6px 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}

.news-desc {
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 8px;
}

.news-meta {
  font-size: 0.85rem;
  color: #aaa;
}

.news-card:hover {
  transform: scale(1.05);
  color: #000;
}

/* Flechas */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(42,42,61,0.8);
  color: #ffd700;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: background 0.3s ease;
  z-index: 10;
}

.carousel-arrow:hover {
  background: rgba(255,215,0,0.9);
  color: #2a2a3d;
}

.carousel-arrow.left {
  left: 10px;
}

.carousel-arrow.right {
  right: 10px;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .news-card {
    min-width: 200px;
  }
  .carousel-arrow {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .news-card {
    min-width: 160px;
  }
  .carousel-arrow {
    display: block; /* en móvil solo scroll táctil */
  }
}

  `;
  document.head.appendChild(style);
})();
  const newsCarousel = document.getElementById("news-carousel");

  // Recorremos el arreglo de noticias (de noticias.js)
  noticias.forEach(noticia => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <a href="${noticia.link}" target="_blank" rel="noopener noreferrer">
        <img src="${noticia.img}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p class="news-desc">${noticia.descripcion}</p>
        <p class="news-meta">${noticia.fecha} · ${noticia.categoria}</p>
      </a>
    `;
    newsCarousel.appendChild(card);
  });
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("news-carousel");
  const leftBtn = document.querySelector(".carousel-arrow.left");
  const rightBtn = document.querySelector(".carousel-arrow.right");

  if (carousel && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});



