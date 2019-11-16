$('.link_top').click(function() {

  var top = $('#top').offset().top;

  $('html, body').animate({scrollTop:top});

});

$('.link_aboutMe').click(function() {

  var aboutMe_top = $('#aboutMe').offset().top;

  $('html, body').animate({scrollTop:aboutMe_top});

});

$('.link_works').click(function() {

  var works_top = $('#works').offset().top;

  $('html, body').animate({scrollTop:works_top});

});

$('.link_skill').click(function() {

  var skill_top = $('#skill').offset().top;

  $('html, body').animate({scrollTop:skill_top});

});

$('.link_activities').click(function() {

  var activities_top = $('#activities').offset().top;

  $('html, body').animate({scrollTop:activities_top});

});

