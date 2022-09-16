

// control del DOM
const avatar = document.getElementById('avatar'); 
const offcanvas = document.getElementById('bodyOffcanvas') ;
const peliculasApi = document.getElementById("peliculas");
const action = document.getElementById("accion");
const flex = document.getElementById("flexPrint");
const btnSig = document.getElementById('btnSig') ; 
const numeroDePagina = document.getElementById('numeroDePagina') ;
const btnAnt = document.getElementById('btnAnt') ;
const cerrar = document.getElementById('cerrarSesion')

// traido del storage

let userLogin = sessionStorage.getItem('usuario');
let usuario = JSON.parse(userLogin)
let nombre= sessionStorage.getItem('nombre')

// pagina
let pagina = 1;

// cierre de sesion



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

// control de los avatar



        if(avatar){
      avatar.className=sessionStorage.getItem('avatar')
        }
    let avt1 = document.getElementById('avatar1'); 
    avt1.onclick=()=>{
      avatar.className.remove=avatar; 
      avatar.className='avatar1';
      sessionStorage.setItem('avatar', avatar.className)
    }

    let avt2= document.getElementById('avatar2') ;
    avt2.onclick=()=>{
      avatar.className.remove=avatar
      avatar.className ='avatar2';
      sessionStorage.setItem('avatar', avatar.className)
    
    } 
      avatar.addEventListener('click',()=>{
          avatar.innerText=`${nombre}`
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

cerrar.onclick=()=>{
 sessionStorage.clear()
}



// llamdo de funciones
peli();


