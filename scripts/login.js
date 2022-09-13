

let user = localStorage.getItem('usuario')
let form= document.getElementById('formulario')
let submit = document.getElementById('enviar')
let email= document.getElementById('email')
let body = document.getElementById('body')

    submit.onclick=(e)=>{
        e.preventDefault()
        let user = localStorage.getItem('usuario')
        let userLogin = JSON.parse(user); 
        let form= document.getElementById('formulario')
        let password = document.getElementById('password')
        let submit = document.getElementById('enviar')
        let email= document.getElementById('email')
    if(userLogin.email === email.value && userLogin.password=== password.value && userLogin.email!='' && userLogin.password!=''){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 8000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `${userLogin.nombre}... podes acceder a los titulos`,
            html: `<button class="swal-button"><a href="../pages/paginaUsuario.html">pagina Principal</a></button>`
          })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'debes completar los campos'
               
            })   
            
            
        }
        
   
    }
