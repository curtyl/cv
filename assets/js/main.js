$(document).ready(function() {
  $(".Dropdown").on("click",function(){
    $(this).toggleClass('is-expanded');
  });

  $(window).bind('scroll', function() {
    if($(window).scrollTop() > 69){
      $('.Dropdown').addClass('fixed');
    }else{
      $('.Dropdown').removeClass('fixed');
    }
  })

  $(".formations").on("click",function(){
    $('html, body').animate({scrollTop:$('#Formations').position().top}, 'slow');
  });

  $(".ep").on("click",function(){
    $('html, body').animate({scrollTop:$('#ep').position().top}, 'slow');
  });

  $(".profil").on("click",function(){
    $('html, body').animate({scrollTop:$('#profil').position().top}, 'slow');
  });

  $(".contact").on("click",function(){
    $('html, body').animate({scrollTop:$('#contact').position().top}, 'slow');
  });
});
