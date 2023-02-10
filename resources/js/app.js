if(window.innerWidth<=767){
const navLinks = document.querySelectorAll('.navbar-nav li')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
  console.log('run');
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
}
// console.log(window.innerWidth);


// Email Validation

// valiations of js
const errors = document.querySelectorAll('.err');
const form = document.querySelector('#contact form');
const email = document.querySelector('#email');
const name = document.querySelector('#name');
const message = document.querySelector('#message');
const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

let isValid;

form.addEventListener('submit',(e)=>{
    if(name.value===''){
        e.preventDefault();
       
        console.log('works');
        isValid=false;
        errors[0].textContent='Required';
        name.classList.add('focus')
        
    }
    else if(name.value.length<4){
        e.preventDefault();
        isValid=false;
        errors[0].textContent='Must be More than 4 Characters';
        console.log('name is invalid');
        name.classList.add('focus')
    }
    
    
    if(email.value===''){
        e.preventDefault();
        errors[1].textContent='Required';
        console.log('works');
        email.classList.add('focus')
        isValid=false;

    
    }
    else if(!re.test(email.value)){
        e.preventDefault();
        errors[1].textContent='Enter valid email Format';
        email.classList.add('focus')
        isValid=false;
    }


    if(message.value===''){
        e.preventDefault();
        errors[2].textContent='Required';
        message.classList.add('focus')
        console.log('works');
        isValid=false;
    }

    if(!isValid){
        setTimeout(clear,1000);
    }
    
    
})

function clear(){
    errors.forEach(erro=>{
        erro.textContent='';
    })
    name.classList.remove('focus')
    email.classList.remove('focus')
    message.classList.remove('focus')
}
