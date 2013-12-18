
jQuery(function($) {
  $('.scroll').click(function() {
    var anchor_name = $(this).attr('href').split('#')[1];
    var anchor = $('#' + anchor_name);
    $('html, body').animate({
      scrollTop: anchor.offset().top
    }, 600);
    return false;
  });

  var redphone_carousel_paused   = false;
  var textsecure_carousel_paused = false;

  $('#redphone_carousel').carousel();
  $('#textsecure_carousel').carousel();

  $("#encrypted_voice .features a").click(function(e){
    e.preventDefault();
    var index = parseInt($(this).attr('data-to'));
    redphone_carousel_paused = true;
    $('#redphone_carousel').carousel(index);
    var nav = $('#encrypted_voice .features');
    var item = nav.find('a').get(index);
    nav.find('a.active').removeClass('active');
    $(item).addClass('active');
  });

  $("#encrypted_texts .features a").click(function(e){
    e.preventDefault();
    var index = parseInt($(this).attr('data-to'));
    textsecure_carousel_paused = true;
    $('#textsecure_carousel').carousel(index);
    var nav = $('#encrypted_texts .features');
    var item = nav.find('a').get(index);
    nav.find('a.active').removeClass('active');
    $(item).addClass('active');
  });


  $("#redphone_carousel").bind('slide', function(e) {
    var elements = 4;
    var nav = $('#encrypted_voice .features');
    var index = $('#redphone_carousel').find('.item.active').index();
    index = (index == elements - 1) ? 0 : index + 1;
    var item = nav.find('a').get(index);
    nav.find('a.active').removeClass('active');
    $(item).addClass('active');
  });

  $("#textsecure_carousel").bind('slide', function(e) {
    var elements = 3;
    var nav = $('#encrypted_texts .features');
    var index = $('#textsecure_carousel').find('.item.active').index();
    index = (index == elements - 1) ? 0 : index + 1;
    var item = nav.find('a').get(index);
    nav.find('a.active').removeClass('active');
    $(item).addClass('active');
  });

  $("#redphone_carousel").bind('slid', function(e) {
    if (redphone_carousel_paused) {
      $('#redphone_carousel').carousel("pause");
      $('#redphone_carousel').carousel({interval: false});
    }
  });

  $("#textsecure_carousel").bind('slid', function(e) {
    if (textsecure_carousel_paused) {
      $('#textsecure_carousel').carousel("pause");
      $('#textsecure_carousel').carousel({interval: false});
    }
  });
});

