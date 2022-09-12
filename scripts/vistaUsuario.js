

// control del DOM
let avatar =document.getElementById('avatarDefault')
const offcanvas = document.getElementById('bodyOffcanvas')
const peliculasApi = document.getElementById("peliculas");
const action = document.getElementById("accion");
const flex = document.getElementById("flexPrint");
const btnSig = document.getElementById('btnSig')
const numeroDePagina = document.getElementById('numeroDePagina')
const btnAnt = document.getElementById('btnAnt')
// busqueda
let seacrh = document.getElementById('buscar')
let btnSearch = document.getElementById('bt-buscar')

// pagina
let pagina = 1;


// funcionamientos de los botones de la paginación 


btnSig.onclick = () => {
  pagina < 1000 ? pagina += 1 : console.loig('no se puede acceder a la página')
  numeroDePagina.innerText = pagina
  peliculasApi.innerHTML = ''
  peli()
}
btnAnt.onclick = () => {
  pagina > 1 ? pagina -= 1 : console.log('no se puede acceder a la página')
  numeroDePagina.innerText = pagina;
  peliculasApi.innerHTML = ''
  peli()
}


// funciones


function avatares(){
  
  avatar.onclick=()=>{
    offcanvas.innerHTML=
    `
    <div class="avatares">
    
    <img src="../images&videos/avatar1.png" alt="" class="avatar avatar1" id="avatar1">
    <img src="../images&videos/avatar2.png" alt="" class="avatar avatar2" id="avatar2">
    <img src="../images&videos/avatar3.png" alt="" class="avatar avatar3" id="avatar3">
    <img src="../images&videos/avatar4.png" alt="" class="avatar avatar4" id="avatar4">
    
    </div
    `;
 let avatar1 = document.getElementById('avatar1'); 
 let avatar2 = document.getElementById('avatar2'); 
 let avatar3 = document.getElementById('avatar3'); 
 let avatar4 = document.getElementById('avatar4');
 
 avatar1.onclick=()=>{
  avatar.setAttribute('src' , '../images&videos/avatar1.png')
 
 }
 avatar2.onclick=()=>{
  avatar.setAttribute('src' , '../images&videos/avatar2.png')
 }
 avatar3.onclick=()=>{
  avatar.setAttribute('src' , '../images&videos/avatar3.png')
 }
 avatar4.onclick=()=>{
  avatar.setAttribute('src' , '../images&videos/avatar4.png')
 }
  }
  }

const peli = () => {
  // Get Api
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=aaf8812b1d1a70feeec14d75ddd78b5f&language=es-MX&page=${pagina}`
  )
    .then((res) => res.json())
    .then((res) => {
      const resultado = res.results;
      // escribir en el Dom
      for (e of resultado) {

        peliculasApi.innerHTML += `
    <img  src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="" class="imgPath" id="img${e.id}">
      `;
        // boton de busqueda
        btnSearch.onclick = (e) => {
          e.preventDefault()
          let buscarPelicula = seacrh.value;
          for (e of resultado) {
            if (buscarPelicula == e.title) {  
              peliculasApi.style.transition = '1s'
              peliculasApi.classList.remove('gridPeliculas')
              peliculasApi.classList.add('flayerBusqueda')
              peliculasApi.innerHTML = `
                  <div class="flayer">
                  <img  src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="" class="imgPath" id="img${e.id}">
                  <p class="parrafo">${e.overview}</p>
                  </div>

             ` ;

            }

          }
        }
      }

      // seleccion de imagenes para ver la info de cada pelicula
      resultado.forEach(element => {
        let img = `img${element.id}`
        document.getElementById(img).addEventListener('click', () => {
          Swal.fire({
            icon: "info",
            title: `${element.title}`,
            text: `${element.overview}`,
          })
        })
      });

    });

};

// llamdo de funciones
peli();
avatares()


