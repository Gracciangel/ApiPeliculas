
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
        localStorage.setItem('usuario', JSON.stringify(user))
        if(nombreUsuairo !='' && emailUsuario!='' && passwordUsuario!=''){
       location.href='../pages/login.html'
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'debes completar los campos',
              })   
    
        }
            
        
           
    }
}
