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
 });

});
