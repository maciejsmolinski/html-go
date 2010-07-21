# HTML-go

You wonder what **HTML-go** is, right ?
  
  
**HTML-go** is a lightweight html/css/js framework.
It's purpose is to speed up your front-end development and diving into new projets. 
It's a simple base. You choose what you need and remove all the code you don't. That's it!

(current version: 0.9.1)

VIEW DEMO: (http://maciejsmolinski.com/framework/demo/)

## Directory Stucture

That is directory structure I use in framework

* `/css` - css stylesheets
* `/js` - all the javascript
* `/images` - site images, remember to optimize them (<http://smush.it/>)

## Framework in shortcut:

* HTML5 doctype
* `js` class appended to body (if browser supports javascript)
* jQuery 1.4.2 framework (served by google)

For IE:

* IE stylesheet
* HTML5 basic support for IE browsers


##The code - HTML


###HTML5 doctype

	<!DOCTYPE html>

> Firstly, the framework uses HTML5 doctype and that's why there are two files:
>
> * `index.html` with HTML4/XHTML markup
> * `index.html5.html` with HTML5 markup


###Browsers with javascript support

	<script type="text/javascript">document.documentElement.className += " js";</script>

> Appending `js` class to the body tag if the browser supports javascript [source](http://www.webkrauts.de/2008/12/14/sehr-sehr-schnelle-seiten-website-performance-best-practice-teil-2/)


###jQuery

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/application.js"></script>

> Placing all javascript on the bottom of the page [to speed up site loading](http://developer.yahoo.com/performance/rules.html#js_bottom )
> 
> * `jQuery 1.4.2 min` is being served by google
> * `js/application.js` served locally, that's where the js magic takes place


###Turning google chrome frame ON on IE browsers

	<meta http-equiv="X-UA-Compatible" content="chrome=1">

> Turning [google chrome frame](http://code.google.com/intl/pl-PL/chrome/chromeframe/) ON for IE browsers (if user has previously installed it on his computer)


###IE stylesheet

	<link href="css/style-ie.css" rel="stylesheet" media="all" type="text/css" />

> Targeting IE6 and above


###HTML5 basic support for IE browsers

	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>

> The script adds very basic html5 support (but does!) for IE browsers


## The code - CSS

> nothing here, yet!...

## Additional information

Some code snippets and concepts are based on:

* [YUI 3](http://developer.yahoo.com/yui/3/)
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)
* [HTML5 enabling script for IE](http://remysharp.com/2009/01/07/html5-enabling-script/)


## Credits

Created by Maciej Smoliński (<http://devbubble.net>). No rights reserved