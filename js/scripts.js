$( document ).ready(function() {
    console.log( "ready!" );

    /* Show/hide user menu */
    $('.user h4').click(function(){
        $('.user-menu').fadeToggle('fast');
        $('.user h4').toggleClass('over');
    });

    $('.user').mouseleave(function(){
        $('.user-menu').fadeOut('fast');
        $('.user h4').removeClass('over');
    });
});
  


  

