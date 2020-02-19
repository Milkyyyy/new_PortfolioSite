$(window).on('load',function(){
  $("#loadingWrap").delay(1000).fadeOut('slow');
  console.log("読み込み完了");
});

function loaderClose(){
  $("#loadingWrap").fadeOut('slow');
}

setTimeout(loaderClose,10000);

$(function() {

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

  $('#view_all').click(function() {
    $('.works_03').slideDown(1000);
    $(".works_03").css('display','flex');
    $("#view_all").css('display','none');
    $("#close").css('display','flex');
    var speed = 800;
    var workList_top = $('#workList_top').offset().top;
    $('html, body').animate({scrollTop:workList_top},speed);
    return false;
  });

  $('#close').click(function() {
    // $(".works_03").css('display','none');
    $('.works_03').slideUp(1000);
    $("#view_all").css('display','flex');
    $("#close").css('display','none');
    var speed = 800;
    var works_top = $('#works').offset().top;
    $('html, body').animate({scrollTop:works_top},speed);
    return false;
  });

  $('.sydney').hover(
    function() {

      $(".con_sydney").css({'opacity':'1','z-index':'2'});   
      $(".intern").css('opacity','0.2');   
      $(".workshop").css('opacity','0.2');  
      $(".othlohack").css('opacity','0.2');   
      $(".poster").css('opacity','0.2');  

    },
    function() {

      $(".con_sydney").css({'opacity':'0','z-index':'0'}); 
      $(".intern").css('opacity','1');   
      $(".workshop").css('opacity','1');  
      $(".othlohack").css('opacity','1');   
      $(".poster").css('opacity','1');

    }
);

$('.intern').hover(
  function() {

    $(".con_intern").css({'opacity':'1','z-index':'2'});   
    $(".sydney").css('opacity','0.2');   
    $(".workshop").css('opacity','0.2');  
    $(".othlohack").css('opacity','0.2');   
    $(".poster").css('opacity','0.2');  

  },
  function() {

    $(".con_intern").css({'opacity':'0','z-index':'0'}); 
    $(".sydney").css('opacity','1');   
    $(".workshop").css('opacity','1');  
    $(".othlohack").css('opacity','1');   
    $(".poster").css('opacity','1');

  }
);

$('.workshop').hover(
  function() {

    $(".con_workshop").css({'opacity':'1','z-index':'2'});   
    $(".sydney").css('opacity','0.2');   
    $(".intern").css('opacity','0.2');  
    $(".othlohack").css('opacity','0.2');   
    $(".poster").css('opacity','0.2');  

  },
  function() {

    $(".con_workshop").css({'opacity':'0','z-index':'0'}); 
    $(".sydney").css('opacity','1');   
    $(".intern").css('opacity','1');  
    $(".othlohack").css('opacity','1');   
    $(".poster").css('opacity','1');

  }
);

$('.othlohack').hover(
  function() {

    $(".con_othlohack").css({'opacity':'1','z-index':'2'});   
    $(".sydney").css('opacity','0.2');   
    $(".intern").css('opacity','0.2');  
    $(".workshop").css('opacity','0.2');   
    $(".poster").css('opacity','0.2');  

  },
  function() {

    $(".con_othlohack").css({'opacity':'0','z-index':'0'}); 
    $(".sydney").css('opacity','1');   
    $(".intern").css('opacity','1');  
    $(".workshop").css('opacity','1');   
    $(".poster").css('opacity','1');

  }
);

$('.poster').hover(
  function() {

    $(".con_poster").css({'opacity':'1','z-index':'2'});   
    $(".sydney").css('opacity','0.2');   
    $(".intern").css('opacity','0.2');  
    $(".workshop").css('opacity','0.2');   
    $(".othlohack").css('opacity','0.2');  

  },
  function() {

    $(".con_poster").css({'opacity':'0','z-index':'0'}); 
    $(".sydney").css('opacity','1');   
    $(".intern").css('opacity','1');  
    $(".workshop").css('opacity','1');   
    $(".othlohack").css('opacity','1');

  }
);

setInterval( "slideSwitch()", 3000 );

});

function slideSwitch() {
  var $active = $('#slideshow p.active');

  if ( $active.length == 0 ) $active = $('#slideshow p:last');

  var $next =  $active.next().length ? $active.next()
    : $('#slideshow p:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
    });
}
