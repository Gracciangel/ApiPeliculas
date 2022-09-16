// comtrol del dom 

const body = document.getElementById('body'); 
const btnMode = document.getElementById('btnMode') ;
let modo= sessionStorage.getItem('modo')


if(modo){
    btnMode.classList=sessionStorage.getItem('btn')
    body.className=modo;
}



btnMode.onclick=()=>{
if(modo ==='light'){
    btnMode.classList.remove('btnLight')
    btnMode.classList.add('btnDark')
    btnMode.className='btnDark'
    body.className='dark'
    modo='dark'
}else{
    btnMode.classList.remove('btnDark'); 
    btnMode.classList.add('btnLight')
    btnMode.className='btnLight'
    body.className='light'
    modo='light'
    
    
}
sessionStorage.setItem('modo' , modo )
sessionStorage.setItem('btn', btnMode.className)

}
