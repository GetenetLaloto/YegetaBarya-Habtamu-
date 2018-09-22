$(document).ready(()=>{
  $('.nav-bar').click(function(){
    $nav = $(this);
    $nav.toggleClass(function(index, name, state){
      // TODO: menu height should be outside calc and should be only calc in initial and resize
      const menuHeight = name === 'nav-bar active' ? 0 :  $( window ).outerHeight() - $nav.outerHeight();
      const bottom  = name === 'nav-bar active' ? 0 : -menuHeight
      $nav.find('.nav-list-wrapper').css({'height': menuHeight, 'bottom': bottom});
      return 'active';
    });
  });
});
