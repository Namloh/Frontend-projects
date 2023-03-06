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
    console.log(opened)
    if(opened){
        setTimeout(() => {
            navbar[0].classList.remove("scrolled")
          }, "330");
        opened = false;
    }
    else{
        navbar[0].classList.add("scrolled")
        opened = true;
    }
    
       
})

/*
var arrows =  document.getElementsByClassName('arr-btn')
var items = document.getElementsByClassName('carousel-item active')

Array.from(arrows).forEach(function (element) {
    element.addEventListener("click", function(){
        if(items.length > 1){
            items[0].classList.remove("active")
        }
    })
});
*/

