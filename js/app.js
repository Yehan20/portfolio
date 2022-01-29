const toggleBtn = document.querySelector('.toggle');
const hamBurgermenu = document.querySelector('.hamburger__menu')
const navBar = document.querySelector('.nav__bar')
const nav__items = document.querySelectorAll('.list__link');
const profile=document.querySelector('#profile');
const about  =document.querySelector('#aboutPara');
const works = document.querySelectorAll('.work');
const spinner  =document.querySelector('.spinner');

let aboutSection,contact,skills,projects;
aboutSection = document.querySelector('#abt').offsetTop - 100;
contact = document.querySelector('#contact').offsetTop - 200;
skills = document.querySelector('#skills').offsetTop - 300 ;
projects = document.querySelector('#projects').offsetTop -230;
window.addEventListener('resize',()=>{

         aboutSection = document.querySelector('#abt').offsetTop -100 ;
         contact = document.querySelector('#contact').offsetTop -200;
         skills = document.querySelector('#skills').offsetTop - 300;
         projects = document.querySelector('#projects').offsetTop - 230 ;
         console.log('resized');
})

window.addEventListener("hashchange", function () {
        setTimeout( ()=>{window.scrollTo(window.scrollX, window.scrollY -40 )},400)

       });


setTimeout(()=>{
    spinner.style.display='none';
},1000)

toggleBtn.addEventListener('click',()=>{
        nav__items.forEach(nav=>{
                nav.classList.toggle('dark');
               
        })
        hamBurgermenu.classList.toggle('open')
     
        navBar.classList.toggle('slide')
        
   
    
})


// remove link underlines after each click
function def(){
     nav__items.forEach(item=>{
        item.style.setProperty('--number2',0);
     })
}


nav__items.forEach((link,index)=>{

        link.setAttribute('data-label',index)
      
        link.addEventListener('click',()=>{
                
                def();
                hamBurgermenu.classList.toggle('open')
                navBar.classList.toggle('slide');
                console.log(link);
               
                if(link.classList.contains('click')){
                        link.style.setProperty('--number2',0);
                        link.classList.remove('click');
                }
                else{
                        link.classList.add('click')
                        link.style.setProperty('--number2',1);
                }
              
               
                
        })
})



// gets the link depending on the data label
function getLink(number){
        let value;
        nav__items.forEach(item=>{
                if(item.getAttribute('data-label')==number){
                        value=item;
                }
             })
             
        return value;
}




// js scroll color change effect
const header = document.querySelector('#header');
header.style.background='#fff'

nav__items.forEach(nav=>{
        nav.classList.add('dark');
})
hamBurgermenu.style.background='#333'


let isTrue= function (){
    if(scrollY>25){
            return true
    }
    else{
            return false;
    }
}()

let val;

//defaault method if loaded in a specific scroll distance
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


   // scorlling
      window.addEventListener('scroll',(e)=>{
        console.log('SRCOLLy',scrollY);  

   
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
        
        //scrolling effects

        let distance=[aboutSection ,projects,skills,contact] // array of nav distances
        let linkArray=[getLink(0),getLink(1),getLink(2),getLink(3)] // array of links
        if(scrollY===0){
                linkArray[0].style.setProperty('--number2',0)
        }
        if(scrollY>distance[0]){
                
                linkArray[0].style.setProperty('--number2',1)
                removeSelected(0);
        }
        if(scrollY>distance[1]){
            
                linkArray[1].style.setProperty('--number2',1)
                console.log('this works');
                removeSelected(1);
        }
        if(scrollY>distance[2]){

                linkArray[2].style.setProperty('--number2',1)
                console.log('this works');
                removeSelected(2);
        }
        if(scrollY>distance[3]){

                linkArray[3].style.setProperty('--number2',1)
                console.log('this works')
                removeSelected(3);
        }

        function removeSelected(number){
            for(let i=0; i<linkArray.length; i++){
                    if(!(i===number)){
                        linkArray[i].style.setProperty('--number2',0)
                    }
            }
        }

    
})

// projects animation
function loopWorks(time){
        works.forEach((work)=>{
                setTimeout(()=>{
                        work.classList.add('grows')
                        work.style.transform=`scale(1,1)`;
                      
                },time)
                time+=750;
              
          })

}


