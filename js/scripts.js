$( document ).ready(function() {

    $('.filters .toggle').click(function(){
        $(this).toggleClass('open');
        $('.filters .options').fadeToggle();
    });

    $('.dropdown label').click(function(){
        $(this).parent().parent().find('label').removeClass('active');
        $(this).toggleClass('active');
    });


    /* Show/hide user menu */
    $('.user h4').click(function(){
        $('.user-menu').fadeToggle('fast');
        $('.user h4').toggleClass('over');
    });

    $('.user').mouseleave(function(){
        $('.user-menu').fadeOut('fast');
        $('.user h4').removeClass('over');
    });

  


    /* Accordion */
   //$('.panel-title').click(function(){
    //   $('.panel-heading').removeClass('open');
    //   $(this).parents('.panel-heading').addClass('open');
    //});


  
});
