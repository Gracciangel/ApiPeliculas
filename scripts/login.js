
const listaDeusuairos=[];  

let user = localStorage.getItem('usuario')
let form= document.getElementById('formulario')
let submit = document.getElementById('enviar')
let email= document.getElementById('email')
let body = document.getElementById('body')

function crearCuenta(){
    submit.onclick=(e)=>{
        e.preventDefault()
        let user = localStorage.getItem('usuario')
        let userLogin = JSON.parse(user); 
        let form= document.getElementById('formulario')
        let password = document.getElementById('password')
        let submit = document.getElementById('enviar')
        let email= document.getElementById('email')
    if(userLogin.email === email.value && userLogin.password=== password.value){
        alert(`bienvenido ${userLogin.nombre}`)  
       location.href='paginaUsuario.html'
    }else{
        alert('ERROR')
    }
    }
}
crearCuenta()
