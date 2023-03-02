$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        var $navbar = $(".navbar");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });


var arrows =  document.getElementsByClassName('arr-btn')
var items = document.getElementsByClassName('carousel-item active')



Array.from(arrows).forEach(function (element) {
    element.addEventListener("click", function(){
        if(items.length > 1){
            items[0].classList.remove("active")
        }
    })
});


