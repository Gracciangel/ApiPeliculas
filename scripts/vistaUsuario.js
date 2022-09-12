







// control del DOM
let avatar =document.getElementById('btnAvatar')
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

let avatarUser = avatar.classList=localStorage.getItem('avatar')


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




avatar.addEventListener('click',()=>{
  offcanvas.innerHTML=`
  <div class="avatares">
  <img class="avatar1 avatar" src="../images&videos/avatar1.png" id="avatar1" alt="">
  <img class="avatar2 avatar" src="../images&videos/avatar2.png" id="avatar2" alt="">
  <img class="avatar3 avatar" src="../images&videos/avatar3.png" id="avatar3" alt="">
    <img class="avatar4 avatar" src="../images&videos/avatar4.png" id="avatar4" alt="">  
    </div
    `;
    
    let avt1 = document.getElementById('avatar1')
    avt1.onclick=()=>{
      if(avatarUser){
        avatar.classList.remove('avatar'); 
        avatar.classList.add('avatar1'); 
        localStorage.setItem('avatar', avatar.classList='avatar1')
        
      }
    }
    let avt2 =document.getElementById('avatar2')
    avt2.onclick=()=>{
      if(avatarUser){
        avatar.classList.remove('avatar'); 
        avatar.classList.add('avatar2'); 
        localStorage.setItem('avatar', avatar.classList='avatar2')
        
      }
    }
    let avt3 =document.getElementById('avatar3')
    avt3.onclick=()=>{
      if(avatarUser){
        avatar.classList.remove('avatar'); 
        avatar.classList.add('avatar3'); 
        localStorage.setItem('avatar', avatar.classList='avatar3')
        
      }
    }
    let avt4 =document.getElementById('avatar4') ;
    avt4.onclick=()=>{
      if(avatarUser){
        avatar.classList.remove('avatar'); 
        avatar.classList.add('avatar4'); 
        localStorage.setItem('avatar', avatar.classList='avatar4')
        
      }
    }
  })
  
  // funciones
  
  
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



