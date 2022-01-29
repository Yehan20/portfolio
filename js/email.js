// valiations of js
const errors = document.querySelectorAll('.err');
const form = document.querySelector('.contact__form');
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
        
    }
    else if(name.value.length<4){
        e.preventDefault();
        isValid=false;
        errors[0].textContent='Must be More than 4 Characters';
        console.log('name is invalid');
    }
    
    
    if(email.value===''){
        e.preventDefault();
        errors[1].textContent='Required';
        console.log('works');
        isValid=false;

    
    }
    else if(!re.test(email.value)){
        e.preventDefault();
        errors[1].textContent='Enter valid email Format';
        isValid=false;
    }


    if(message.value===''){
        e.preventDefault();
        errors[2].textContent='Required';
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
}
console.log('gg');