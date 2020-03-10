$(function(){
  
  let $login = $('#login-wrapper');
  
  $('#loginid').click(function(){
    $login.fadeIn();
  });
  
  $('.begin').click(function(){
    $login.fadeIn();
  });
  
  $('#end-btn').click(function(){
    $login.fadeOut();
  });
  
});
