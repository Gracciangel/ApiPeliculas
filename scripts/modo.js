// comtrol del dom 

const body = document.getElementById('body'); 
const btnMode = document.getElementById('btnMode') ;
const offCanvasBody = document.getElementById('bodyOffcanvas')

let modo= localStorage.getItem('modo')


if(modo){
    offCanvasBody.className=modo;
    btnMode.classList=localStorage.getItem('btn')
    offCanvasBody.style.height='100%'
    body.className=modo
}



btnMode.onclick=()=>{
if(modo ==='light'){
    btnMode.classList.remove('btnLight')
    btnMode.classList.add('btnDark')
    btnMode.className='btnDark'
    offCanvasBody.className='dark'
    body.className='dark'
    modo='dark'
}else{
    btnMode.classList.remove('btnDark'); 
    btnMode.classList.add('btnLight')
    btnMode.className='btnLight'
    offCanvasBody.className='light'
    body.className='light'
    modo='light'
    
}
localStorage.setItem('modo' , modo )
localStorage.setItem('btn', btnMode.className)

}
