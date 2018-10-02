$(document).ready(()=>{
  $('.nav-bar .hamburger-menu').click(function(){
    $nav = $(this).closest('.nav-bar');
    $nav.toggleClass(function(index, name, state){
      // TODO: menu height should be outside calc and should be only calc in initial and resize
      const menuHeigt = name === 'nav-bar active' ? 0 : `calc(100vh - ${$nav.outerHeight()}px)`;
      const fixedContent = name === 'nav-bar active' ? 'initial' : 'fixed';
      $nav.find('.nav-list-wrapper').css({'height': menuHeigt});
      // NOTE: content must be in a wrapper to stop it from moving when navbar is active
      // $('.content-wrapper').toggleClass('active-nav');
      $('.body-wrapper').toggleClass('nav-active');
      return 'active';
    });
  });

  $( window ).resize(function() {
    $('nav.active .nav-list-wrapper').css({'height': `calc(100vh - ${$('.nav-bar').outerHeight()}px)`})
  });
});
