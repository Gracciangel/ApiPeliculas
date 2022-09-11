

// control del DOM

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

// funciones


const pagination=()=>{
  btnSig.onclick=()=>{
   if(pagina <1000){
     pagina+=1
     peliculasApi.innerHTML=
  numeroDePagina.innerText=pagina ;
  peli()
   }
   }
  }
  btnAnt.onclick=()=>{
    if(pagina>1){
      pagina-=1
    peliculasApi.innerHTML=
    numeroDePagina.innerText=pagina
    peli()
    }
  }





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
             alert(e.overview)
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
pagination()