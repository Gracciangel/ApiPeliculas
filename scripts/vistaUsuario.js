

// control del DOM
const peliculasApi = document.getElementById("peliculas");
const action = document.getElementById("accion");
const flex = document.getElementById("flexPrint");
// busqueda
let seacrh = document.getElementById('buscar')
let btnSearch = document.getElementById('bt-buscar')

// pagina
let pagina = 1;
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
      btnSearch.onclick=(e)=>{
          e.preventDefault()
          let buscarPelicula = seacrh.value; 
          for(e of resultado){
            e.title.innerText= e.title.toLowerCase() ;
            if(buscarPelicula == e.title){
             alert(e.title)
            }
              
          }
        
      
        }
   

      
    }
   

    resultado.forEach(element => {
     let img = `img${element.id}` 
     document.getElementById(img).addEventListener('click',()=>{
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