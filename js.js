$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        var $navbar = $(".navbar");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });
