$(document).ready(function(){
  /*
   // Reset Font Size
  var originalFontSize = $('.f14').css('font-size');
  $(".resetFont").click(function(){
    $('.f14').css('font-size', originalFontSize);
    $('.text-body').css({'font-size': '14px'});
    $('.f12').css({'font-size': '12px', 'font-weight': '400'});
  });
  // Increase Font Size
  $(".increaseFont").click(function(){
     $('.f14').css('font-size', '17px');
     $('.text-body').css({'font-size': '17px'});
     $('.f12').css({'font-size': '14px', 'font-weight': '600'});
  });
  */


  // Estilo wireframe
  $("#borde").click(function(){

    if ($('body').hasClass('contraste')) {	  
		$('body').removeClass('contraste');
		$('body').removeClass('altocontraste');
		$('img').removeClass('grayscale');  
		$('.grayscale').addClass('grayscale-off');    
    } else {
		$('body').removeClass('altocontraste');
		$('body').addClass('contraste');  
		$('.grayscale').removeClass('grayscale-off'); 
		$('img:not(.only-mobile, .no-gray)').gray();
		$('img:not(.only-mobile, .no-gray)').addClass('grayscale'); 
		$('.bgi').css('backgroundImage',"");  
    }
  });
  
  // Estilo contraste
  $("#contraste").click(function(){
    
    if ($('body').hasClass('altocontraste')){
    	$('body').removeClass('contraste');
      	$('body').removeClass('altocontraste');
		$('img').removeClass('grayscale');  
		$('.grayscale').addClass('grayscale-off');  
		
		$('.bgi').css('backgroundImage',"");      
    } else {
    	$('body').removeClass('contraste');
    	$('body').addClass('altocontraste');    		
		$('.grayscale').removeClass('grayscale-off'); 
		$('img:not(.only-mobile, .no-gray)').gray();
		$('img:not(.only-mobile, .no-gray)').addClass('grayscale'); 
		
		var att = $('.bgi').css('background-image');
		var newS = att.slice(0, -6)+'_gris.jpg")';  
		console.log('newS: '+newS);
		$('.bgi').css('background-image', newS);
    }
    
  });


  // Increase fontSize
  $(".increaseFont").click(function (){
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);
    console.log(count);

    if ( count <= 2 ){
      $('.resetFont').data("click_count", 0);
      $("p").not("#barra-accesibilidad p").css("font-size", function(i, value) {
        return parseInt(value) + 1;
      });
      $("a").not("#barra-accesibilidad a").css("font-size", function(i, value) {
        return parseInt(value) + 1;
      });
    }
    if ( count == 1 ){
      $('.resetFont').data("click_count", 1);
    }
    return false;
  });


  // Decremented fontSize
  $(".resetFont").click(function (){
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);

    if ( $('.increaseFont').data("click_count") >= 1) {
      if ( count <= 2 ){
        $('.increaseFont').data("click_count", 0);
        $("p").not("#barra-accesibilidad p").css("font-size", function(i, value) {
          return parseInt(value) - 1;
        });
        $("a").not("#barra-accesibilidad a").css("font-size", function(i, value) {
          return parseInt(value) - 1;
        });
      }
      if ( count == 1 ){
        $('.increaseFont').data("click_count", 1);
      }
    }
    return false;
  });

  // scrollTop animado
  $("a.volver-arriba").on("click", function(event) {
    event.preventDefault();
    $("body").animate({
     scrollTop: $("#menu-conoce").offset().top
    }, 1000);
  });


});
