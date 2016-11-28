$(document).ready(function() {
  $(".Dropdown").on("click",function(){
    $(this).toggleClass('is-expanded');
  });

  $(window).bind('scroll', function() {
    if($(window).scrollTop() > 69.75){
      $('.Dropdown').addClass('fixed');
    }else{
      $('.Dropdown').removeClass('fixed');
    }
  })
});
