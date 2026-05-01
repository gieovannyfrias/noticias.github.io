const tendencias = [
  {
    titulo: "La IA transforma la educación",
    descripcion: "Las plataformas inteligentes personalizan el aprendizaje y mejoran la experiencia de los estudiantes.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "https://www.google.com",
    categoria: "Tecnología",
    fecha: "Ene 2026"
  },
  {
    titulo: "Blockchain en gobiernos",
    descripcion: "Los sistemas públicos adoptan blockchain para mayor transparencia y seguridad.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Innovación",
    fecha: "Ene 2026"
  },
  {
    titulo: "El metaverso gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
    {
    titulo: "El universal galatico gana terreno",
    descripcion: "Cada vez más empresas invierten en experiencias virtuales inmersivas.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Virtual",
    fecha: "Ene 2026"
  },
  {
    titulo: "Startups latinas en auge",
    descripcion: "Nuevos emprendimientos tecnológicos de Latinoamérica conquistan mercados globales.",
    img: "https://lh3.googleusercontent.com/d/1Jj5Nr78jWUw_tdG4h8AYZWnrUCz30Ttu=w1000",
    link: "#",
    categoria: "Negocios",
    fecha: "Ene 2026"
  }
];
/*tendencias*/
const tendenciasList = document.getElementById("tendencias-list");

tendencias.forEach(tendencia => {
  const card = document.createElement("div");
  card.classList.add("tendencia-card");
  card.innerHTML = `
    <a href="${tendencia.link}" target="_blank" rel="noopener noreferrer">
      <img src="${tendencia.img}" alt="${tendencia.titulo}">
      <h3>${tendencia.titulo}</h3>
      <p class="tendencia-desc">${tendencia.descripcion}</p>
      <p class="tendencia-meta">${tendencia.fecha} · ${tendencia.categoria}</p>
    </a>
  `;
  tendenciasList.appendChild(card);
});
const leftArrow = document.querySelector(".tendencias-arrow.left");
const rightArrow = document.querySelector(".tendencias-arrow.right");

leftArrow.addEventListener("click", () => {
  tendenciasList.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  tendenciasList.scrollBy({ left: 300, behavior: "smooth" });
});
