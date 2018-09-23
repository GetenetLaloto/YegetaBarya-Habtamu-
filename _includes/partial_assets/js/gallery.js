$(document).ready(()=>{

  $('.lazy').Lazy({
   afterLoad: function(el){
     el.removeClass('loading');
     el.removeClass('lazy');
     const $img = el.find('img');
     $img.attr('src', $img.data('src'));
   },
   onError: function(el){
     el.remove();
   }
 });

 $('.gallery-wrapper .image').click(function(){
   const imageSrc = $(this).data('imgsrc');
   $('.full-image-wrapper .image img').attr('src', imageSrc)
   $('.full-image-wrapper').toggle();
 });

 $('.full-image-wrapper .close-btn, .full-image-wrapper').click(function(e){
   // TODO: need fix when click img should not close
   if(!$(this).is($('.full-image-wrapper img'))){
    $('.full-image-wrapper').toggle();
   }
   e.stopPropagation();

 });

});
