  $(function(){

    $('body').addClass('js');

    if(!"placeholder" in document.createElement("input"))
    {
      // Simulate placeholder functionality
      $('input[placeholder]').each(function() {
        $(this).attr('value') == '' ?  $(this).attr('value',$(this).attr('placeholder')) : true;
      })
      $('input[placeholder]').focus(function() {
        $(this).attr('value') == $(this).attr('placeholder') ?  $(this).attr('value','') : true;
      })
      $('input[placeholder]').blur(function() {
        $(this).attr('value') == '' ?  $(this).attr('value',$(this).attr('placeholder')) : true;
      })
    }


    // all javascript code here


    $('#map').gMap({
      markers: [{ address: "New York",
                  html: "<strong>CompanyName</strong><br />Address, 00000 New York",
                  popup: true }],
      zoom: 15
    });

    // $("#carousel").carousel({
    //   dispItems: 1,
    //   pagination: true,
    //   nextBtn: '',
    //   prevBtn: '',
    //   loop: true,
    //   autoSlide: true,
    //   autoSlideInterval: 5000,
    //   effect: 'fade'
    // });

    // if($.flash.available)
    // {

    //   // Hide "Get Adobe Flash Player" button:
    //   $('#install-flash-notice').hide();

    //   // Insert flash:
    //   $('#header').flash({
    //     swf: 'images/content/header.swf',
    //     width: 960, height: 120
    //   });

    // }

    if($.browser.msie)
    {
      // IE6-notice [PL]:
      // $('body').append('<div id="ie6-notice"><p id="ie6-text">Korzystasz ze starszej wersji przeglądarki Internet Explorer, przez co nasza strona może nie działać poprawnie. Proponujemy aktualizację oprogramowania do jednej z następujących przeglądarek: <a href="http://www.mozilla.com/firefox/">Firefox</a>, <a href="http://www.apple.com/safari/">Safari</a>, <a href="http://www.opera.com/">Opera</a> lub <a href="http://www.microsoft.com/windows/internet-explorer/">Internet Explorer 8</a><br /><br />Bardzo dziękujemy za wizytę!</p></div>');
      // IE6-notice [EN]:
      $('body').append('<div id="ie6-notice"><p id="ie6-text">You appear to be browsing this site using Internet Explorer 6. This browser is now out of date. For safer, more reliable browsing it is recommended that you upgrade your browser to to <a href="http://www.mozilla.com/firefox/">Firefox</a>, <a href="http://www.apple.com/safari/">Safari</a>, <a href="http://www.opera.com/">Opera</a>, or <a href="http://www.microsoft.com/windows/internet-explorer/">Internet Explorer 8</a>');
    }

  });
