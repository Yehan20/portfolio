const toggleBtn = document.querySelector('.toggle');
const hamBurgermenu = document.querySelector('.hamburger__menu')
const navBar = document.querySelector('.nav__bar')
const nav__items = document.querySelectorAll('.list__link');
const profile=document.querySelector('#profile');
const about  =document.querySelector('#aboutPara');
const works = document.querySelectorAll('.work');




toggleBtn.addEventListener('click',()=>{
        nav__items.forEach(nav=>{
                nav.classList.toggle('dark');
        })
        hamBurgermenu.classList.toggle('open')
        navBar.classList.toggle('slide')
        
   
    
})

nav__items.forEach(link=>{
        link.addEventListener('click',()=>{
                hamBurgermenu.classList.toggle('open')
                navBar.classList.toggle('slide');
        })
})

// js scroll color change effect
const header = document.querySelector('#header');
header.style.background='#fff'

nav__items.forEach(nav=>{
        nav.classList.add('dark');
})
hamBurgermenu.style.background='#222'


let isTrue= function (){
    if(scrollY>25){
            return true
    }
    else{
            return false;
    }
}()

let val;

function basicScrolls(){

        if(scrollY<150){

         profile.style.transform=`translateX(200%)`;
         about.style.transform= `translateX(-180%)`;
        }
                       
        else{

         reset();
        }
              
                    
        if(window.scrollY<520){
           resetWork(0,0);
           val=true;
     

        }
        else{
                val=false;
                console.log(val);
                resetWork(1,1)
        }
    
}



 // reseting animations 

  function reset(){
        profile.style.transform=`translateX(0)`;
        about.style.transform= `translateX(0)`;
   
  }  
  
  function resetWork(a,b){
        works.forEach(work=>{
                 
                work.style.transform=`scale(${a},${b})`;
             
         })

        
  }  


  basicScrolls();



      window.addEventListener('scroll',(e)=>{
   
        if(scrollY>25 ){
                header.style.background=`#750000 `;
                nav__items.forEach(nav=>{
                        nav.classList.remove('dark');
                })
                hamBurgermenu.style.background='#f5f5f5'
                header.style.padding='0.75em';
               

        }
        else{
                header.style.background=`#fff `;
                nav__items.forEach(nav=>{
                        nav.classList.add('dark');
                }) 
                hamBurgermenu.style.background='#333'
                header.style.padding='1em';
        
        }

        if(scrollY>260){
               profile.classList.add('right');
               about.classList.add('left');
               reset();
               
        }

        if(scrollY>520){
                let time=500;
           
                console.log(val);
                if(val){
                        loopWorks(time);
                }
         
              
              

        }
    
})

function loopWorks(time){
        works.forEach((work)=>{
                setTimeout(()=>{
                        work.classList.add('grows')
                        work.style.transform=`scale(1,1)`;
                      
                },time)
                time+=750;
              
          })

}


