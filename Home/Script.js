// Navigation Bar 
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
// const menuBar = document.querySelectorAll('menu-bar');

if(bar){
    bar.addEventListener('click', ()=> {
        navbar.classList.add('active');
        console.log("clicked");
    })
}

if(close){
    close.addEventListener('click', ()=> {
        navbar.classList.remove('active');
        console.log("clicked");
    })
}

$(".menu-bar").click(function () {
  navbar.classList.remove('active');
      console.log("clicked");
});

// if(menuBar){
//   menuBar.addEventListener('click', ()=> {
//       navbar.classList.remove('active');
//       console.log("clicked");
//   })
// }

$(document).ready(function () {
  $(window).scroll(function () {    
    if (this.scrollY > 1000) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
});

// slide up button 
 //slide-up script
 $('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop:0});
});

 // typing animation script
 var typed = new Typed(".typing", {
    strings: ["Incubation", "Accelerte", "Investment", "Insights", "Mentorship"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// FAQ part 
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) =>{
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('active');
        console.log("clicked");
    })
});

//Projects
$(function () {
    $("#project-part").owlCarousel({
      margin:30,
      items: 1,
      autoplay: true,
      smartSpeed: 1200,
      loop: true,
      autoPlayHoverPause: true,
    });
  });