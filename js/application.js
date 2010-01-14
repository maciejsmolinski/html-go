$(document).ready(function() {

  if($.browser.msie)
  {
    // Add class [dashed underlines] to all abbr,acronym and dfn tags with title attribute specified
    $('abbr[title],acronym[title],dfn[title]').addClass("attr_title");
  }

  // Add class to all inputs (class = input's `type` attribute value) 
  $('input').each(function() {$(this).addClass(this.type)});

  // put all your javascript code here

});