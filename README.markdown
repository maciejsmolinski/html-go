# HTML-go


You wonder what **HTML-go** is, right ?
  
  
**HTML-go** is a bunch of files I start to work with when creating (x)html/css/js projects.  
The framework is a result of all my work spent with front-end development.  

If you like it and/or have any suggestions ? Feel free to contact me or just fork the project.  

## Directory Stucture

That is typical directory structure I use

* `/css` - css stylesheets
* `/js` - all the javascript
* `/images` - site images, remember to optimize them (http://smush.it/)

## The code - HTML

**HTML5 doctype**

	<!DOCTYPE html>

> Firstly, the framework uses HTML5 doctype and that's why there are two files:
>
> * `index.html` with HTML4/XHTML markup
> * `index.html5.html` with HTML5 markup


**Turning google chrome frame `ON` for IE browsers**

	<meta http-equiv="X-UA-Compatible" content="chrome=1">

> Then.. We turn [google chrome frame](http://code.google.com/intl/pl-PL/chrome/chromeframe/) ON for IE browsers if user has previously installed it on his computer


**Browsers with javascript support**

	<script type="text/javascript">document.documentElement.className += " js";</script>

> Next, a little trick to append .js class to the body tag if the browser supports javascript [source](http://www.webkrauts.de/2008/12/14/sehr-sehr-schnelle-seiten-website-performance-best-practice-teil-2/)


**body .ie6 & .ie7 classes**

	<!--[if lte IE 6]><body class="ie6"><![endif]-->
	<!--[if IE 7]><body class="ie7"><![endif]-->
	<!--[if !IE]><!--><body><!-- <![endif]-->

> Basing on [source](http://codecandies.de/2008/12/12/conditional-comments-wenige-requests/) we're adding..
>
> * `.ie6` class for <= IE6 browsers
> * `.ie7` class for IE7 browser
>
> ..to the body tag


**HTML5 support for IE**

	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

> The script adds very basic html5 support (but does!) for IE browsers


**jQuery & other javascript**

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/js-engine.js"></script>

> Below we place all our javascript, just to make our site load faster
> 
> * `jQuery 1.3.2 min` is being served by google
> * `js/js-engine.js` served locally, that's where the js magic takes place

## The code - CSS

> nothing here, yet!...

## Additional information

Some code snippets and concepts are based on:

* [YUI 3](http://developer.yahoo.com/yui/3/)
* [Blueprint css framework](http://blueprintcss.org) 
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)
* [HTML5 enabling script for IE](http://remysharp.com/2009/01/07/html5-enabling-script/)


## Credits

Created by Maciej Smoliński (<http://devbubble.net>). No rights reserved