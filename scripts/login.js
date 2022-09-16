

let userlogin = localStorage.getItem('usuario')
let user = JSON.parse(userlogin)
let form= document.getElementById('formulario')
let submit = document.getElementById('enviar')
let email= document.getElementById('email')
let body = document.getElementById('body')

    submit.onclick=(e)=>{
        e.preventDefault()
        let userLogin = sessionStorage.getItem('usuario')
        let user = JSON.parse(userLogin); 
        let form= document.getElementById('formulario')
        let password = document.getElementById('password')
        let submit = document.getElementById('enviar')
        let email= document.getElementById('email')

        if(user == null){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'primero debes registrarte'
          })
        }
    
    if(user.email === email.value && user.password=== password.value && user.value!='' && password.value!=''){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
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
            title: `   ${user.nombre}<br> <br> presiona el boton para acceder a la pagina principal `,
            html: `<button class="swal-button"><a href="/pages/paginaUsuario.html">pagina Principal</a></button>`
          })
         
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'debes completar los campos'
           
        })  
        }
  
          
    }