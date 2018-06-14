 window.onload = function(){

const btnDowiedzSieWiecej = document.querySelector('.txt_button');
 function animacjaZnikania(){
     const numerZnika = document.querySelector('.numer');
     numerZnika.classList.add('animacja_znikania_numeru');
     const pierwszaStrona = document.querySelector('.pierwsza_strona');
     pierwszaStrona.style.display="none";
     
     const drugaStrona=document.querySelector('.druga_strona');
     drugaStrona.style.display="flex";
     
 };
    
    
   
    

btnDowiedzSieWiecej.addEventListener('click', animacjaZnikania);
    



    
}