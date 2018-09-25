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

  $('.photo-wrapper').scroll(()=>{
    window.dispatchEvent(new Event('scroll'))
  });

  function changeImage(direction){
    let initPos = $('.photo-wrapper').offset().left;
    const $photoStrip = $('.image-wrapper');
    const total_size = $photoStrip.length * $photoStrip.width();
    const currPos = Math.abs(initPos - $photoStrip.offset().left);
    const scrollBy = ($photoStrip.width() * Math.round((currPos/$photoStrip.width())+direction))%total_size;
    $('.photo-wrapper').animate({scrollLeft:(scrollBy)}, 500);
  }

  $('.button-wrapper').click(function(e){
    const leftright = $(e.target).closest('.button-wrapper').hasClass('left') ? -1 : 1;
    changeImage(leftright)
  });

  const slide_timer = window.setInterval(()=>{
    changeImage(1);
  }, 4000)

});
