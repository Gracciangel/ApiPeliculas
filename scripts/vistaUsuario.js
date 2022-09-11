// array´s de peliculas

const movieAction = [
  (argo = {
    nombre: "argo",
    duracion: "108 min ",
  }),
  (pianista = {
    nombre: "El Pianista",
    duracion: "108 min ",
  }),
  (sotano = {
    nombre: "El Sotano",
    duracion: "108 min ",
  }),
];
const movieAdventure = [];
const movieNationals = [];
const movieComedy = [];

// control del DOM
const peliculasApi = document.getElementById("peliculas");
const action = document.getElementById("accion");
const flex = document.getElementById("flexPrint");

// pagina
let pagina = 1;

action.onclick = () => {
  console.log("peliculas.json");
};

const peli = () => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=aaf8812b1d1a70feeec14d75ddd78b5f&language=es-MX&page=${pagina}`
  )
    .then((res) => res.json())
    .then((res) => {
      const resultado = res.results ;
     for(e of resultado){
      peliculasApi.innerHTML+=`
      <img  src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="" class="imgPath" id="img${e.id}">
      `;
    }
    resultado.forEach(element => {
     let img = element.id; 
     document.getElementById(`img${img}`).addEventListener('click',()=>{
      alert(element.title)
     })
    });
    });
};
peli();

