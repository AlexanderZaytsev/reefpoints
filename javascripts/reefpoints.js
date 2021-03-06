$(function(){
  $('body').addClass((window.location.pathname.match(/([\w|-]+).html/g) || [''])[0].split(".html")[0]);
  $('input, textarea').inFieldLabel();
  $('h2.hire-us').click(function() {
    $(this).toggleClass('active');
    $('section#form-container').slideToggle(1000);
    return false;
  });
  $('.mobile-nav').toggle(function(){
    $('header ul').slideDown();
    return false;
  }, function(){
    $('header ul').slideUp();
    return false;
  });

  $('#search').liveUpdate('#index');
  $('.show-all-posts').click(function(event) {
    event.preventDefault();
    $('#index article').fadeIn();
    $('.nothin').hide();
    window.viewedAll = true
    window.playedSound = false;
    $('.show-all-posts').hide();
  });

  // Art directed posts
  $('.design aside ul li:eq(2)').after($('aside ul li:eq(0)'));
  $('.design .post-title').bigtext({
    childSelector: '> h1'
  });
});

