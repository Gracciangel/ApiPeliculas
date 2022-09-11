
class usuario{
    constructor(id,email, nombre,  password){
        this.id=id
        this.email= email
        this.nombre=nombre
        this.password=password
    }
}

// controlador del FORMULARIO 
let body = document.getElementById('body')
let formulario = document.getElementById('formulario') ; 
let email= document.getElementById('email') ; 
let nombre = document.getElementById('nombre'); 
let password= document.getElementById('password') ; 
let submit= document.getElementById('enviar')

// LLAMADAS A FUNCIONES

crearCuenta()   

// FUNCIONES



function crearCuenta(){
    submit.onclick=(e)=>{
        e.preventDefault()
        let nombreUsuairo=nombre.value
        let emailUsuario= email.value; 
        let passwordUsuario = password.value; 
        let user = new usuario (1 , emailUsuario ,nombreUsuairo, passwordUsuario)
        sessionStorage.setItem('usuario', JSON.stringify(user))
        if(nombreUsuairo !='' && emailUsuario!='' && passwordUsuario!=''){
            body.style.transition='1s'; 
            body.classList.remove('light');
            body.classList.add('dark')
            body.innerHTML=`
                    
                <div id="div">
                <h1 class="nombreUsuario">${nombreUsuairo}</<h1>
                <h2>Te damos la bienvenida a Sillon</h2>
                <h2>Gracias por crear tu cuenta</h2>
                <a href="./pages/login.html" id="enlace">Accedé a tu cuenta</a>
                </div>
            ` ;
                estilos()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'debes completar los campos',
              })
        }
    }   
    
}
function estilos(){
    body.classList.remove('light')
    body.classList.add('fondoBienvenida')
    let div= document.getElementById('div')
    div.classList.add('estilos')

}