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
* `/docs` - docs&licenses

## The code - HTML

**HTML5 doctype**


> Firstly, the framework uses HTML5 doctype and that's why there are two files:
>
> * `index.html` with HTML4/XHTML markup
> * `index.html5.html` with HTML5 markup


**chrome frame**


> Then.. We turn [google chrome frame](http://code.google.com/intl/pl-PL/chrome/chromeframe/) ON if user has previously installed it on his computer
> 
> * `<meta http-equiv="X-UA-Compatible" content="chrome=1">`


**javascript support**


> Next, a little trick to append .js class to the body tag if the browser supports javascript [source](http://www.webkrauts.de/2008/12/14/sehr-sehr-schnelle-seiten-website-performance-best-practice-teil-2/)
>
> * `<script type="text/javascript">document.documentElement.className += " js";</script>`



**body ie6/ie7 classes**


> Basing on [source](http://codecandies.de/2008/12/12/conditional-comments-wenige-requests/) I've added..
>
> * `.ie6` class for <= IE6 browsers
> * `.ie7` class for IE7 browser
>
> ..to the body tag


**HTML5 support for IE**


> Ok.. we've almost reached --EOF-- and we found..
>
> * `<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->`
>
> the script adds very basic support (but does!) for IE browsers


**javascript**


> And below we place all our javascript, just to make our site load faster
> 
> * `jQuery 1.3.2 min` is being served by google
> * `js/js-engine.js` served locally, that's where the js magic takes place

## The code - CSS

> nothing here, yet!...


## TODO:

* HTML

    > * work on index.html5.html html5 markup
    > * index.html5.html elements as index.html divs' IDs
    > * remove html5shiv js from index.html (there are no html5 tags inside)
    > * use .clearfix !


* CSS

    > * clear up CSS
    > * [fixed] merge print & screen into style.css and use @media instead of
    > * [fixed] add style-ie.css file for all the .ie6, .ie7 CSS code ?
    > * [fixed] IE7 `img {-ms-interpolation-mode: bicubic}`

* JS

    > * add `install google chrome frame` notice for IE

* else

    > * update readme (css code, additional info)
    > * add necessary licences if needed

## Additional information

Some code snippets and concepts are based on:

* [Blueprint css framework](http://blueprintcss.org) 
* [Gerrit van Aaken's HTML/CSS/JS-Kickstart](http://praegnanz.de/weblog/htmlcssjs-kickstart)
* [HTML5 enabling script for IE](http://remysharp.com/2009/01/07/html5-enabling-script/)


## Credits

Created by Maciej Smoliński (<http://devbubble.net>). No rights reserved