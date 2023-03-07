$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        var $navbar = $(".navbar");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });


var hamburger =  document.getElementById('hamburger')
var navbar =  document.getElementsByClassName('navbar')
var collapse =  document.getElementsByClassName('navbar-collapse')
var opened = false;

hamburger.addEventListener("click", function(){
    if(opened && navbar[0].classList.contains("scroll")){
        setTimeout(() => {
            navbar[0].classList.remove("scroll")
          }, "330");
        opened = false;
    }
    else{
        navbar[0].classList.add("scroll")
        opened = true;
    }
    
       
})



