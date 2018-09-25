---
data_file: discipleship
---

{% include partial_assets/javascript_partials.js %}

$(document).ready(()=>{
  // TODO: clean this mess. lots of repetition 
  let pdf_chosen = window.location.hash && ['first', 'second'].includes(window.location.hash.substr(1)) ? window.location.hash.substr(1) : 'first';
  const url = `http://docs.google.com/gview?url=http://www.yegetabaryahabtamu.org/resources/pdf/${pdf_chosen}.pdf&embedded=true`
  $('.pdf-wrapper iframe').attr('src', url);
  $('.button-wrapper .link-button.active').removeClass('active');
  $(`.${pdf_chosen}`).addClass('active');

  $('.button-wrapper .link-button').click(function(){
    // all links should start with # to avoid loading different page (which then is ignored here too)
    const $thisButton = $(this);
    const pdf_chosen = $thisButton.attr('href').substr(1);
    $('.button-wrapper .link-button.active').removeClass('active');
    $thisButton.addClass('active');
    const url = `http://docs.google.com/gview?url=http://www.yegetabaryahabtamu.org/resources/pdf/${pdf_chosen}.pdf&embedded=true`
    $('.pdf-wrapper iframe').attr('src', url);
  })
});
