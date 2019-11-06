$('.link_aboutMe').click(function() {
  
  var aboutMe_top = $('#aboutMe').offset().top;

  $('html, body').animate({scrollTop:aboutMe_top});

});