const navbar= document.querySelector('.navbar')
const hamburger=document.querySelector('.hamburger')
const navLinks=document.querySelector('.nav-links')
const inputs = document.querySelectorAll(".input")

window.addEventListener('scroll', () =>{
    if(this.scrollY >=100){
        navbar.classList.add('scrolled')}
        else{
            navbar.classList.remove('scrolled')
        }
    })
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})
//typedjs
var options = {
    strings: [
      'Make Your Party With ', 
      'Delicious Dishes'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
  
  };
  
  var typed = new Typed('#hero-title', options);

  //contact us
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

  