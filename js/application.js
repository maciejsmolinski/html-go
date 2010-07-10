$(function(){

  if($.browser.msie)
  {
    // Colorize odd rows
    $('.colorize_rows > .row:odd').css({'background':'#eee'});

    // Sometimes clearfix does not help
    $('div:last-child').after('<div class="clear" />');

    // Higlight selected field on focus by changing border-color
    var ie_fields = $('input[type=text],input[type=password],textarea,select')
    ie_fields.focus(function() { $(this).css({'border':'1px solid #9C9C9C'}) });
    ie_fields.blur(function() { $(this).css({'border':'1px solid #ddd'}) });
  }

  // Add class to all inputs (ie. input[type=text] = input.text) - for IE (< 7) purposes mainly, if needed
  $('input').each(function() { $(this).addClass(this.type); });

  // Add `clear:both` to any element after last `.col` (which is floated left) mainly for orphaned `.col`s
  $('.col:last + *').css({'clear':'both'});

  // Highlight selected field's row on focus by changing row's background-color
  var fields = $('.colorize_rows input, .colorize_rows textarea, .colorize_rows select')
  fields.focus(function() { $(this).parents('.row').addClass('focus'); });
  fields.blur(function() { $(this).parents('.row').removeClass('focus'); });

  // Put all your javascript code here ...

});