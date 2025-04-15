const navToggleButton = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const navCenter = document.querySelector('.nav-center');

navToggleButton.addEventListener('click', ()=>{
    
    //Verificamos si los links tienen la clase X con el contains
    //console.log(links.classList.contains('random')) //false
    //console.log(links.classList.contains('links'))//true
    toggleClass();
    console.log(links.classList)
});

function toggleClass(){
        links.classList.toggle('show-links');
}